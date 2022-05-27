import React from "react"
import { Route } from "react-router-dom"
import SetingAdressFrom from "../components/Setings/SetingAdress/SetingAdressFrom"
import SetingPhoneFrom from "../components/Setings/SetingPhone/SetingPhoneForm"
import Setings from "../components/Setings/Setings"
import { RouteEnv } from "../constants/constRouter"
import SliderDashbordTpl from "../views/sliders/SliderDashbordTpl"


const Seting = () => {
	return (
		<>
			<Route exact path={RouteEnv.SETINGS_ADRESS}>
	    	<SliderDashbordTpl>
					<SetingAdressFrom />
	    	</SliderDashbordTpl>
	    </Route>
			<Route exact path={RouteEnv.SETINGS_ADRESS + '/:id'}>
	    	<SliderDashbordTpl>
					<SetingAdressFrom />
	    	</SliderDashbordTpl>
	    </Route>

			<Route exact path={RouteEnv.SETINGS_PHONE}>
	    	<SliderDashbordTpl>
					<SetingPhoneFrom />
	    	</SliderDashbordTpl>
	    </Route>
			<Route exact path={RouteEnv.SETINGS_PHONE + '/:id'}>
	    	<SliderDashbordTpl>
					<SetingPhoneFrom />
	    	</SliderDashbordTpl>
	    </Route>

			<Route exact path={RouteEnv.SETINGS_PAGE}>
	    	<SliderDashbordTpl>
	          <Setings />
	    	</SliderDashbordTpl>
	    </Route>
		</>
		
	)
}
export default Seting