import { proxy } from 'valtio';

const state = proxy ({
    intro: true, //checks for home page
    color: '#EFBD48', //checks default color
    isLogoTexture: true, //are we displaying logo on a shirt
    isFullTexture: false, // are we displaying texture
    logoDecal: './threejs.png', //initial logo
    fullDecal:'./threejs.png',
});

export default state;