import classes from './Modal.module.css'
import ReactDOM from 'react-dom';

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Backdrop = (props) => {
    return <div onClick={props.onClick} className={classes.backdrop} />
}

const overlays = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, overlays)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
        </>
    )

}

export default Modal;