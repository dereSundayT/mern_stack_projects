import React, { useEffect, useMemo, useState } from 'react'
//
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
//
import axios from 'axios'

export default function Home() {
  const MONTHS = useMemo(
		() => [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		],
		[]
	)
	const [userStats, setUserStats] = useState([])

	useEffect(() => {
		const getStats = async () => {
			//
			try {
				const res = await axios.get('/users/stats', {
					headers: {
						token:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2I5MDA0OWE2YWI3NDY1OWMzZjcyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDczMTkwNiwiZXhwIjoxNjQxMTYzOTA2fQ.E4iIk_DvialKFtZPPTXGZNI7FWAklnYY-JNgl1VXwdk',
					},
				})
        const statList =  res.data.sort((a,b)=> a._id-b._id)
				statList.map((item) =>
					setUserStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], 'New User': item.total },
					])
				)
				// setUserStats(res.data)
			} catch (error) {}
		}
		getStats()
	}, [MONTHS])
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
