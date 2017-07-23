import {ProfileStats} from "./profile-stats";

let profile = new ProfileStats(0,0);

console.log("likes: " + profile.likes);

profile.handleClick();

console.log("likes: " + profile.likes);

