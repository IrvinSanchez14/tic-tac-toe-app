import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const styles = {
  header: {
    fontSize: '50px',
    color: '#484848',
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
          <Header content={this.props.winner} style={styles.header} />
          <Modal.Actions>
            <Button basic color='red' inverted>
              <Icon name='remove' /> No
      </Button>
            <Button color='green' onClick={this.ok} inverted>
              <Icon name='checkmark' /> Yes
      </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ModalPop;