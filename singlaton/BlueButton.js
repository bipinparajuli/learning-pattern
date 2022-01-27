import Conter from './singlaton.js'

export default function blueBtn(){
    Conter.increamentCount()
    console.log(Conter.getCount());
}
