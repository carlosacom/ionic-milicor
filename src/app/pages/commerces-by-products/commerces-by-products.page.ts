import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-commerces-by-products',
  templateUrl: './commerces-by-products.page.html',
  styleUrls: ['./commerces-by-products.page.scss'],
})
export class CommercesByProductsPage implements OnInit{
  @ViewChild('mySlider', { static: true }) slider: IonSlides;
  isBeginning$: Observable<boolean>;
  isEnd$: Observable<boolean>;
  commercesByProduct = [];
  product = { name: '', description: '', content:'', image: '' };

  slideOpts = {
    slideShadows: true,
    initialSlide: 1,
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
      }
    }
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService,
    public alertController: AlertController
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getProduct(params.product);
      this.getCommerces(params.product);
    });
  }
  ngOnInit(): void {
    // this.showWarningPrices();
  }
  async showWarningPrices() {
    const alert = await this.alertController.create({
      header: 'Tenga en cuenta',
      message: 'Los precios de los productos pueden estar sujeto a cambios por el establecimiento',
      buttons: ['OK']
    });
    await alert.present();
  }
  getProduct(product: string) {
    this.backend.getProduct(product).then(response => {
      this.product = response;
    }).catch(error => {
      console.error(error);
    });
  }
  getCommerces(product: string) {
    this.backend.getCommercesByproduct(product).then(response => {
      this.commercesByProduct = response;
    }).catch(error => {
      console.error(error);
    });
  }

  nextSlide() {
    if (this.slider) {
      this.slider.slideNext();
    }
  }

  prevSlide() {
    if (this.slider) {
      this.slider.slidePrev();
    }
  }
  updateSliderIconState() {
    this.isEnd$ = from(this.slider.isEnd());
    this.isBeginning$ = from(this.slider.isBeginning());
  }
}
