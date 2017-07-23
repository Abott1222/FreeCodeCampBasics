export class ProfileStats {

	constructor(private _likes:number, private _dislikes:number, private _state:boolean = true) {}

	 handleClick() {
		if(this.state) this.likes += 1;
		else this.likes -= 1; 
	}
	
	//getter function let x = object.likes;
	get likes() {return this._likes;}

	get dislikes() {return this._dislikes;}

	get state() {return this._state;}

	set likes(num) {this._likes +=num;}

}
