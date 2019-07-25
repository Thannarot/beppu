import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as L from "leaflet";
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ModalController } from '@ionic/angular';
import { AppservicesService } from '../services/appservices.service';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page {
//     public map: L.Map;
    json;
//     options = {
//     layers: [
//       L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution: ""
//       })
//     ],
//     zoom: 15,
//     center: L.latLng(33.269184, 131.509363)
//   };
  selectedLanguage:string;
  constructor(private http: HttpClient, private modalCtrl: ModalController, public myService: AppservicesService, private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
//
//   onMapReady() {
//     var markerIcon = new L.Icon({
//        iconSize: [25, 25],
//        iconAnchor: [12, 35],
//        shadowSize: [50, 25],
// 	     shadowAnchor: [12, 35],
//        popupAnchor: [6, -30],
//        iconUrl: 'leaflet/marker-icon.png',
//        iconRetinaUrl: 'leaflet/marker-icon-2x.png',
//        shadowUrl: 'leaflet/marker-shadow.png'
//       });
//
//     setTimeout(() => {
//       this.map.invalidateSize();
//     }, 1000);
//
//     this.http.get("https://bepputool.adpc.net/api/shelter/read.php").subscribe((json: any) => {
//       console.log(json);
//       this.json = json;
//       L.geoJSON(this.json,{
//         pointToLayer: function(feature, latlng) {
//           return L.marker(latlng, {icon: markerIcon});
//         },
//         onEachFeature: function (feature, layer) {
//           layer.on({
//             'click': function (e) {
//                   this.myService.someFunction();
//                 }
//
//           });
//           layer.bindPopup('Shelter name: ' + feature.properties.name);
//         }
//       }).addTo(map);
//     });
//
//     this.http.get("https://bepputool.adpc.net/api/pwd/read.php").subscribe((json: any) => {
//       console.log(json);
//       this.json = json;
//       L.geoJSON(this.json,{
//         pointToLayer: function(feature, latlng) {
//           return L.marker(latlng, {icon: markerIcon});
//         },
//         onEachFeature: function (feature, layer) {
//           // layer.on({
//           //   'click': function (e) {
//           //     this.ShelterModelPage.presentModal();
//           //       }
//           //
//           // });
//           layer.bindPopup('Person name: ' + feature.properties.name);
//         }
//       }).addTo(map);
//     });
//
//     this.http.get("https://bepputool.adpc.net/api/building/read.php").subscribe((json: any) => {
//       console.log(json);
//       this.json = json;
//       L.geoJSON(this.json,{
//         style: function (feature) {
//               return {
//                 'weight': 0.5,
//                 'color': 'red',
//                 'fillOpacity': 0
//               }
//             },
//       }).addTo(map);
//     });
//
//     this.http.get("https://bepputool.adpc.net/api/mashi/read.php").subscribe((json: any) => {
//       console.log(json);
//       this.json = json;
//       L.geoJSON(this.json,{
//         style: function (feature) {
//         return {
//           'weight': 0.7,
//           'color': 'blue',
//           'dashArray': '10, 10',
//           'dashOffset': '20',
//           'fillColor' : 'lightskyblue',
//           'fillOpacity': 0.2
//         }
//       },
//     }).addTo(map);
//     });
//
//   }
//
//
// }

map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([33.273184, 131.509363], 16);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

    var markerIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
    	     shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'leaflet/marker-icon.png',
           iconRetinaUrl: 'leaflet/marker-icon-2x.png',
           shadowUrl: 'leaflet/marker-shadow.png'
          });

    var shelterIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/green-marker.png'
          });

    var pwdIcon = new L.Icon({
           iconSize: [25, 25],
           iconAnchor: [12, 35],
           shadowSize: [50, 25],
           shadowAnchor: [12, 35],
           popupAnchor: [6, -30],
           iconUrl: 'assets/icon/person.png'
          });
    this.http.get("https://bepputool.adpc.net/api/shelter/read.php").subscribe((json: any) => {
          console.log(json);
          this.json = json;
          L.geoJSON(this.json,{
            pointToLayer: function(feature, latlng) {
              return L.marker(latlng, {icon: shelterIcon});
            },
            onEachFeature: function (feature, layer) {
              layer.on({
                'click': function (e) {

                    }

              });
              layer.bindPopup('Shelter name: ' + feature.properties.name);
            }
          }).addTo(this.map);
        });


        // this.http.get("https://bepputool.adpc.net/api/pwd/read.php").subscribe((json: any) => {
        //   console.log(json);
        //   this.json = json;
        //   L.geoJSON(this.json,{
        //     pointToLayer: function(feature, latlng) {
        //       return L.marker(latlng, {icon: pwdIcon});
        //     },
        //     onEachFeature: function (feature, layer) {
        //
        //       layer.bindPopup('Person name: ' + feature.properties.name);
        //     }
        //   }).addTo(this.map);
        // });
        var yourLocationIcon = new L.Icon({
               iconSize: [25, 25],
               iconAnchor: [12, 35],
               shadowSize: [50, 25],
               shadowAnchor: [12, 35],
               popupAnchor: [6, -30],
               iconUrl: 'assets/icon/your-location.png'
              });
        L.marker([33.273073, 131.505804], {icon: yourLocationIcon}).addTo(this.map).bindPopup("Your Location");

        // this.http.get("https://bepputool.adpc.net/api/building/read.php").subscribe((json: any) => {
        //   console.log(json);
        //   this.json = json;
        //   L.geoJSON(this.json,{
        //     style: function (feature) {
        //           return {
        //             'weight': 0.5,
        //             'color': 'red',
        //             'fillOpacity': 0
        //           }
        //         },
        //   }).addTo(this.map);
        // });
        //
        // this.http.get("https://bepputool.adpc.net/api/mashi/read.php").subscribe((json: any) => {
        //   console.log(json);
        //   this.json = json;
        //   L.geoJSON(this.json,{
        //     style: function (feature) {
        //     return {
        //       'weight': 0.7,
        //       'color': 'blue',
        //       'dashArray': '10, 10',
        //       'dashOffset': '20',
        //       'fillColor' : 'lightskyblue',
        //       'fillOpacity': 0.2
        //     }
        //   },
        // }).addTo(this.map);
        // });
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }
}
