import Conter from './singlaton.js'

export default function redBtn(){
    Conter.increamentCount()
    console.log(Conter.getCount());

}
