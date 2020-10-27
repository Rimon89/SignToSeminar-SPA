import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Modal } from 'semantic-ui-react'
import ModalStore from '../../stores/modalStore'

const ModalContainer = () => {
    const modalStore = useContext(ModalStore)
    const {modal: {open, body}, closeModal} = modalStore

    return (
        <Modal open={open} onClose={closeModal} size='mini' style={{position: 'relative', height: 'auto'}}>
            <Modal.Content>
                {body}
            </Modal.Content>
        </Modal>
    )
}

export default observer(ModalContainer)