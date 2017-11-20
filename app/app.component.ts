import { Component }          from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	// 方向，左为true，右为false
	private idx:number = 0;

	private switchs = [{
		bgUrl:'images/AD0IsYr2BhACGAAg4YS1zAUotNvyzAIwgA84oAY.jpg',
		tmpl: `<section class="board-container">
				<section class="content">
					<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAgrYW1zAUo4qb4zQEwnQI45QE.png" style="height: 229px;">
					<section class="remark">
						<section class="small">QUALITY COMES FROM PROFESSIONAL</section>
						<section class="big">源于专业</section>
						<section class="big" style="text-indent:1em;">铸就辉煌</section>
						<section class="small" style="text-indent:5.4em;">INREGRITY CAST BRILLIANT AND SUCCESSFUL</section>
					</section>
				</section>
			</section>`
	},{
		bgUrl:'',
		tmpl:`<section class="board-container">
				<section class="content">
					<section class="float_img_328">
						<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAg8ou1zAUonszx5QQwggQ4HA.png">
					</section>
					<section class="float_img_326">
						<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAgn4u1zAUospbz0AEw4AI4TQ.png">
					</section>
					<section class="float_img_327">
						<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAgsou1zAUo4Pe3iQQwGzgb.png">
					</section>
					<section class="float_img_325">
						<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAg_JHJzQUooKuihwIwlAQ4TQ.png">
					</section>
					<section class="float_img_324">
						<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAgmIm1zAUo6If8tAUwkgQ4Ug.png">
						<section class="float_img_323">
							<img class="float_in_img J_defImage " src="/images/AD0IsYr2BhAEGAAgxYi1zAUo3LaQ5wEwrwM4JA.png">
						</section>
					</section>
				</section>
			</section>`
	}];
}
