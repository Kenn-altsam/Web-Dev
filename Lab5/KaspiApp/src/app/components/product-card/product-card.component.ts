import { Component, input, output, signal } from '@angular/core';
import { productModel } from '../../models/product.model';
 
@Component({
    selector: 'prod-card',
    imports: [],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class productCard {
    readonly product = input.required<productModel>();
    products: productModel[] = [];
    readonly Math = Math;

    readonly deleteProduct = output<number>();

    likes = signal(0);
    liked = signal(false);

    onLike(): void {
        this.liked.set(!this.liked());
        this.likes.update(l => this.liked() ? 1 : 0);
       
    }

    onDelete(): void {
        this.deleteProduct.emit(this.product().id);
    }

    shareWhatsApp(): void {
        const message = `Check out this product: ${this.product().link}`;
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    shareTelegram(): void {
        const url = this.product().link;
        const text = this.product().name;
        const shareURL = `https://t.me/share/url?url=${encodeURIComponent(url)}$text=${encodeURIComponent(text)}`;
        window.open(shareURL, '_blank');
    }

    
}