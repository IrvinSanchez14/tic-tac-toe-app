import React from 'react';
import PropTypes from "prop-types";
import { Header, Modal } from 'semantic-ui-react';

const styles = {
  header: {
    fontSize: '50px',
    color: '#484848',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  winner: {
    color: '#484848',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '100px',
  },
  buttonYes: {
    width: '171px',
    height: '41px',
    border: '2px solid #484848',
    boxSizing: 'border-box',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#484848',
    fontWeight: 'bold',
    position: 'absolute',
    left: '38%',
  }
}

class ModalPop extends React.Component {
  state = {
    openModal: false,
  }

  componentDidMount() {
    if (this.props.openModal) {
      this.setState({
        openModal: true
      })
    }

  }

  ok = () => {
    this.setState({
      openModal: false
    })
  }

  render() {
    return (
      <div>
        <Modal open={this.state.openModal} basic size='small' >
          <Header style={styles.header} />
          <Modal.Content>
            <p style={styles.header}>
            {this.props.messageGame}</p>
            <p style={styles.winner}>
              {this.props.winner}
            </p>
          </Modal.Content>
          <Modal.Actions>

      <button style={styles.buttonYes} onClick={this.ok}>
        YES
      </button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

ModalPop.propTypes = {
  openModal: PropTypes.bool,
  messageGame: PropTypes.string,
  winner: PropTypes.string,
}

export default ModalPop;