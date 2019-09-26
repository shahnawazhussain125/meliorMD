import React, { Component } from 'react';   
import { Container, Row, Col} from 'react-bootstrap';
import { withScriptjs, withGoogleMap,GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps'

class ReactGoogleMaps extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // a: new google.maps.LatLng(41.8507300, -87.6512600),
            // b: new google.maps.LatLng(41.8525800, -87.6514100),
             stations: [
                {lat: 48.9812840, lng: 21.2171920, name: 'Station 1'},
                {lat: 48.9832841, lng: 21.2176398, name: 'Station 2'},
                {lat: 48.9856443, lng: 21.2209088, name: 'Station 3'},
                {lat: 48.9861461, lng: 21.2261563, name: 'Station 4'},
                {lat: 48.9874682, lng: 21.2294855, name: 'Station 5'},
                {lat: 48.9909244, lng: 21.2295512, name: 'Station 6'},
                {lat: 48.9928871, lng: 21.2292352, name: 'Station 7'},
                {lat: 48.9921334, lng: 21.2246742, name: 'Station 8'},
                {lat: 48.9943196, lng: 21.2234792, name: 'Station 9'},
                {lat: 48.9966345, lng: 21.2221262, name: 'Station 10'},
                {lat: 48.9981191, lng: 21.2271386, name: 'Station 11'},
                {lat: 49.0009168, lng: 21.2359527, name: 'Station 12'},
                {lat: 49.0017950, lng: 21.2392890, name: 'Station 13'},
                {lat: 48.9991912, lng: 21.2398272, name: 'Station 14'},
                {lat: 48.9959850, lng: 21.2418410, name: 'Station 15'},
                {lat: 48.9931772, lng: 21.2453901, name: 'Station 16'},
                {lat: 48.9963512, lng: 21.2525850, name: 'Station 17'},
                {lat: 48.9985134, lng: 21.2508423, name: 'Station 18'},
                {lat: 49.0085000, lng: 21.2508000, name: 'Station 19'},
                {lat: 49.0093000, lng: 21.2528000, name: 'Station 20'},
                {lat: 49.0103000, lng: 21.2560000, name: 'Station 21'},
                {lat: 49.0112000, lng: 21.2590000, name: 'Station 22'},
                {lat: 49.0124000, lng: 21.2620000, name: 'Station 23'},
                {lat: 49.0135000, lng: 21.2650000, name: 'Station 24'},
                {lat: 49.0149000, lng: 21.2680000, name: 'Station 25'},
                {lat: 49.0171000, lng: 21.2710000, name: 'Station 26'},
                {lat: 49.0198000, lng: 21.2740000, name: 'Station 27'},
                {lat: 49.020309268043846, lng: 21.274721856687165, name: 'Station 28'},
                {lat: 49.02232395017621, lng: 21.279109004057773, name: 'Station 29'},
                {lat: 49.02402655468863, lng: 21.283334573946604, name: 'Station 30'},
                {lat: 49.02526126608461, lng: 21.286539058323115, name: 'Station 31'},
                {lat: 49.0276195039253, lng: 21.292726079965405, name: 'Station 32'},
                {lat: 49.029537295685316, lng: 21.297751579939245, name: 'Station 33'},
                {lat: 49.03121534470749, lng: 21.302187985564387, name: 'Station 34'},
             ]
        
         }
    }

    clickHandler = (event) =>{
        const coords = {};
        coords.lat = event.latLng.lat();
        coords.lng = event.latLng.lng();
        console.log("clickobj", coords)
    }

    componentDidMount() {
        // const DirectionsService = new google.maps.DirectionsService();
  
        // DirectionsService.route({
        //   origin: new google.maps.LatLng(41.8507300, -87.6512600),
        //   destination: new google.maps.LatLng(41.8525800, -87.6514100),
        //   travelMode: google.maps.TravelMode.DRIVING,
        // }, (result, status) => {
        //   if (status === google.maps.DirectionsStatus.OK) {
        //     this.setState({
        //       directions: result,
        //     });
        //   } else {
        //     console.error(`error fetching directions ${result}`);
        //   }
        // });
      }
    

    render() { 
        return ( 
            <Container>
                <MyMapComponent
                    isMarkerShown={true}
                    // googleMapURL="https://maps.googleapis.com/maps/api/js?callback=initMap"
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    stations={this.state.stations}
                    clickHandler={this.clickHandler}
                    direction ={this.state.a}
                />
            </Container>
         );
    }
}


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 48.9991912, lng: 21.2171920 }} 
        onClick={props.clickHandler}
    >
        { 
            props.isMarkerShown 
            && 
            props.stations.map((value, index) =>{
                return(
                    <span>
                    <Marker 
                        position={{ lat: value.lat, lng: value.lng }} 
                        defaultLabel={value.name}
                        key={index}
                    />
                    <DirectionsRenderer directions={{ lat: value.lat, lng: value.lng }}/>
                    </span>
                )
            })
        }
    </GoogleMap>
))
 
export default ReactGoogleMaps;