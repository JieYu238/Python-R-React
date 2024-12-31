import React from "react";
import Header from "./components/header";
import Entry from "./components/entry";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Entry
          img="./images/japan.jpg"
          name="Mount fuji"
          country="Japan"
          link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists."
        />
        <Entry
          img="https://tse3.mm.bing.net/th?id=OIP.bCOJmUid-cMwGQtrmOeZrQHaFj&w=355&h=355&c=7"
          name="Mount Everest"
          country="China"
          link="https://www.google.ca/maps/place/Mt+Everest/@27.9881201,86.9249751,14z/data=!4m6!3m5!1s0x39e854a215bd9ebd:0x576dcf806abbab2!8m2!3d27.9881206!4d86.9249751!16zL20vMGJsYmQ?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          desc="The tallest mountain in the world at 8,848 meters, Everest is a
            bucket-list destination for climbers and a symbol of human ambition
            and endurance."
        />
        <Entry
          img="https://tse3.mm.bing.net/th?id=OIP.w5LVJ45GFBMwD3C4q8j7GAHaE8&w=316&h=316&c=7"
          name="Lake Baikal"
          country="Russia"
          link="https://www.google.ca/maps/place/Lake+Baikal/@53.4088592,99.1421256,5.25z/data=!4m6!3m5!1s0x5dab7dedcf8dd873:0xf2489412c5853349!8m2!3d53.5587003!4d108.1649965!16zL20vMGZwMTA?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          desc="The deepest freshwater lake globally, Baikal holds 20% of the
            Earth's unfrozen fresh water, surrounded by stunning Siberian
            landscapes and diverse wildlife."
        />
        <Entry
          img="https://tse3.mm.bing.net/th?id=OIP.7Ap3qVnBEX7kmijenPibfgHaE8&w=316&h=316&c=7"
          name="Grand Canyon"
          country="USA"
          link="https://www.google.ca/maps/place/Grand+Canyon+National+Park/@36.0851433,-114.1656604,8z/data=!3m1!4b1!4m6!3m5!1s0x873312ae759b4d15:0x1f38a9bec9912029!8m2!3d36.2678855!4d-112.3535253!16zL20vMGNucnI?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          desc="Carved by the Colorado River, the Grand Canyon reveals billions of
            years of geological history with its dramatic red and orange rock
            formations."
        />
      </div>
    </>
  );
}
