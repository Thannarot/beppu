import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.page.html',
  styleUrls: ['./request-view.page.scss'],
})
export class RequestViewPage {

  constructor(private http: HttpClient, private modalCtrl: ModalController, public alertController: AlertController, private router: Router, public navCtrl: NavController) { }

  json;
  map: Map;

    ionViewDidEnter() { this.leafletMap(); }

    leafletMap() {
      // In setView add latLng and zoom
      this.map = new Map('map-request').setView([33.273073, 131.505804], 16);
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

          var yourLocationIcon = new L.Icon({
                 iconSize: [25, 25],
                 iconAnchor: [12, 35],
                 shadowSize: [50, 25],
                 shadowAnchor: [12, 35],
                 popupAnchor: [6, -30],
                 iconUrl: 'assets/icon/your-location.png'
                });
          L.marker([33.273073, 131.505804], {icon: yourLocationIcon}).addTo(this.map).bindPopup("Your Location");
    }
    async presentAlertConfirm() {
     const alert = await this.alertController.create({
       header: 'We found a volunteer for you.',
       message: 'Mr. Justin B.<br> <img src="https://i.stack.imgur.com/l60Hf.png">',
       buttons: [
         {
           text: 'Cancel',
           role: 'cancel',
           cssClass: 'secondary',
           handler: (blah) => {
             console.log('Cancel');
           }
         }, {
           text: 'Accept',
           handler: () => {
             this.router.navigate(['/tracking-pwdviwe']);
             // L.marker([33.271692, 131.506094], {icon: volunteerLocationIcon}).addTo(this.map).bindPopup("Volunteer");
             // var element = <HTMLInputElement> document.getElementById("request-btn");
             //  element.hidden = true;
           }
         }
       ]
     });

     await alert.present();
   }

    /** Remove map when we have multiple map object */
    ionViewWillLeave() {
      this.map.remove();
    }
  }
