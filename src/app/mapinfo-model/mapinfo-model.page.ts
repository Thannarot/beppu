import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as L from "leaflet";

@Component({
  selector: 'app-mapinfo-model',
  templateUrl: './mapinfo-model.page.html',
  styleUrls: ['./mapinfo-model.page.scss'],
})
export class MapinfoModelPage {
  map: L.Map;
  json;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 7,
    center: L.latLng(47.482019, -1)
  };

  constructor(private http: HttpClient, private modelCtrl: ModalController) {}

  async closeMapModel(){
    await this.modelCtrl.dismiss();
  }
  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
    }, 500);
    this.http.get("https://pkgstore.datahub.io/examples/geojson-tutorial/example/data/db696b3bf628d9a273ca9907adcea5c9/example.geojson").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });
  }
}
