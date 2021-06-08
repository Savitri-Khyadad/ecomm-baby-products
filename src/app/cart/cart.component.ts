import { Component, OnInit } from '@angular/core';
import {NgbModalConfig,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CartComponent implements OnInit {


  constructor(private modalService: NgbModal,config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.getItems();
  }

  title!:string
  price!:number
  quantity!:number
  q!:number;

  closeResult = '';
  imageReq='data:image/png;base64';

  Items:any;

  async getItems(){
    // let content: any;

    var content = await fetch('http://localhost:3000/cart', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        // this.Item = await content.json();
        this.Items = await content.json();
        console.log(this.Items[0].image)
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  async removeItem (id: any) {
    var content = await fetch(`http://localhost:3000/cart/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    var post = await content.json();
    console.log(post.title);
    // window.location.reload(true)
  }

  async patchItem (id: any) {
    var content = await fetch(`http://localhost:3000/cart/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({quantity:this.q})
    });
    var post = await content.json();
    console.log("edit: "+post);
    // window.location.reload(true);
  }

  setQuantity(q:number){
    this.q=q;
  }

  bought(){
    alert("Order Placed Successfully! Now sit back and relax till we deliver your order!")
  }

}
