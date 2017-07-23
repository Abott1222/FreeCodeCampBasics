export class ProfileStats {
    constructor(_likes, _dislikes, _state = true) {
        this._likes = _likes;
        this._dislikes = _dislikes;
        this._state = _state;
    }
    handleClick() {
        if (this.state)
            this.likes += 1;
        else
            this.likes -= 1;
    }
    //getter function let x = object.likes;
    get likes() { return this._likes; }
    get dislikes() { return this._dislikes; }
    get state() { return this._state; }
    set likes(num) { this._likes += num; }
}
