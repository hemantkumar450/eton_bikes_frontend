import { Component, OnInit, Input } from "@angular/core";
import { Overview } from "./overview.model";

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
})
export class OverviewComponent implements OnInit {
  overviewData: Overview = {
    title: "Puzzling Ain’t Easy",
    description: `<p>The V10 is designed to be exactly the right bike for anyone who steps
        up to the startline with eyes on a podium. The racer who chooses a
        V10 is the recipient of every bit of work and puzzling that’s gone
        into the Syndicate’s race bikes.</p>
      <p>The continuous fine-tuning that the V10 has undergone with the
        Syndicate for World Cup season after season has guaranteed regular,
        high-level feedback. The result is perhaps the most refined
        suspension performance available outside of a World Cup pit. 215mm
        of VPP™ travel is exquisitely refined and the ease of tuning and
        serviceability of the VPP system makes it a hit in the pits with
        mechanics and privateers.</p>
      <p><a href="https://www.etonbicycles.com/news/2020-mtb-wheel-size">Wheel
          size has been the latest puzzle to ponder</a>. Greg Minnaar,
        being a tall and looking for pure speed on the clock, focuses his
        choice on 29-inch wheels. Loris Vergier, shorter in stature but
        similarly looking for efficiency has chosen <a
          href="https://www.etonbicycles.com/news/2020-syndicate-mixed-wheel-v10">a
          mixed wheel setup (29-inch front and 27.5-inch rear)</a>. Luca
        Shaw chose what feels fun because to him if he’s having fun he’s
        going fast, so he’s also on a mixed setup.</p>
      <p>Because there’s so many flavours and needs we offer the V10 in 27.5
        (front and rear) in the smallest size&nbsp;up to a size large, both
        29-inch (front and rear) and mixed in medium and large frame sizes,
        and 29-inch only&nbsp;for the XL frame size. So your V10 is
        optimized for who you are.</p>
      <p>The most successful bike in downhill history shows no signs of
        slowing down.</p>
      <p>&nbsp;</p>
      <p><em>Additional details for the realest puzzlers:</em></p>
      <ul>
        <li>Adjustable chainstay length to optimize front/rear balance</li>
        <li>Lower leverage rate for optimal shock performance</li>
        <li>Internal derailleur cable routing on swingarm to protect housing
          from chain damage</li>
      </ul>
      <p>&nbsp;</p>
      <p><em>Still looking?</em></p>
      <ul>
        <li>Want a long-travel 29er rather than a DH bike? <a
            href="https://www.etonbicycles.com/megatower">Megatower
            is the answer.</a></li>
        <li>Looking for some aftermarket DH wheels? <a
            href="https://www.reservewheels.com/reserve-dh-mountain-wheel" target="_blank">The Reserve
            Carbon DH</a> is what you need.
        </li>
      </ul>`,
    long_shot_media: [
      "/assets/img/files/ftwilliam19_h1d6041_1.jpg",
      "/assets/img/files/ftwilliam19a63i0632_1.jpg",
      "/assets/img/files/ftwilliam19bb019807_0.jpg",
      "/assets/img/files/ftwilliam19_h1d7631_0.jpg",
      "/assets/img/files/ftwilliam19_m1_0797_2.jpg",
    ],
    features: [
      {
        key: "Available in",
        value: "Carbon CC",
      },
      {
        key: "Wheel size",
        value: '27.5", MX (Mixed), 29"',
      },
      {
        key: "Rear travel",
        value: "215mm",
      },
      {
        key: "Priced from",
        value: "$5999 (MSRP)",
      },
    ],
  };
  @Input() data: Overview;
  constructor() {}
  
  ngOnInit(): void {
    this.overviewData = this.data;
    console.log(this.overviewData, "Inner data");
  }
}
