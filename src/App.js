import React, { Component } from 'react'
import Rules from './components/rules'
import RulesButton from './components/rulesBtn'
import ScoreBoardHeading from './components/scoreBoardHeading'
import SelectChoice from './components/selectChoice'
import Status from './components/status'
import Footer from './footer'

class App extends Component {
  state = {
    displyRules: true,
    showPicked: false,
    showChoiceSelector: true,
    selectedIcon: '',
    mouseChoice: '',
    win: '',
    score: 0
  }

  componentDidMount () {
    const displyRules = localStorage.getItem('rules')
    const score = Number(localStorage.getItem('score'))
    const showPicked = localStorage.getItem('showPicked')
    const showChoiceSelector = localStorage.getItem('showChoiceSelector')
    const selectedIcon = localStorage.getItem('selectedIcon')
    const mouseChoice = localStorage.getItem('mouseChoice')
    const win = localStorage.getItem('win')

    function checkDisplay () {
      if (displyRules === 'false') {
        return false
      } else {
        return true
      }
    }

    function checkShowPicked () {
      if (showPicked === 'false') {
        return false
      } else {
        return true
      }
    }

    function checkShowChoiceSelector () {
      if (showChoiceSelector === 'false') {
        return false
      } else {
        return true
      }
    }

    this.setState({
      displyRules: checkDisplay(),
      selectedIcon,
      mouseChoice
    })

    if (score !== null) {
      this.setState({ score })
    } else {
      this.setState({ score: 0 })
    }

    if (showPicked !== null) {
      this.setState({ showPicked: checkShowPicked() })
    } else {
      this.setState({ showPicked: this.state.showPicked })
    }

    if (showChoiceSelector !== null) {
      this.setState({ showChoiceSelector: checkShowChoiceSelector() })
    } else {
      this.setState({ showChoiceSelector: this.state.showChoiceSelector })
    }

    if (win !== null) {
      this.setState({ win })
    } else {
      this.setState({ win: '' })
    }
    console.log(typeof score)
  }

  showRules = () => {
    this.setState({ displyRules: true }, () => {
      localStorage.setItem('rules', 'true')
    })
  }

  closeRules = () => {
    this.setState({ displyRules: false }, () => {
      localStorage.setItem('rules', 'false')
    })
  }

  handleMouseChoice = () => {
    const arr = ['scissors', 'paper', 'rock', 'lizard', 'spock']
    const randNum = Math.floor(Math.random() * arr.length)
    return arr[randNum]
  }

  checkWinState = () => {
    const { selectedIcon, mouseChoice } = this.state
    if (
      (selectedIcon === 'scissors' && mouseChoice === 'paper') ||
      (selectedIcon === 'paper' && mouseChoice === 'rock') ||
      (selectedIcon === 'rock' && mouseChoice === 'lizard') ||
      (selectedIcon === 'lizard' && mouseChoice === 'spock') ||
      (selectedIcon === 'spock' && mouseChoice === 'scissors') ||
      (selectedIcon === 'scissors' && mouseChoice === 'lizard') ||
      (selectedIcon === 'paper' && mouseChoice === 'spock') ||
      (selectedIcon === 'rock' && mouseChoice === 'scissors') ||
      (selectedIcon === 'lizard' && mouseChoice === 'paper') ||
      (selectedIcon === 'spock' && mouseChoice === 'rock')
    ) {
      let score = this.state.score + 1
      let win = 'win'
      this.setState({ win, score }, () => {
        localStorage.setItem('score', score)
        localStorage.setItem('win', win)
      })
    } else if (
      (selectedIcon === 'scissors' && mouseChoice === 'scissors') ||
      (selectedIcon === 'paper' && mouseChoice === 'paper') ||
      (selectedIcon === 'rock' && mouseChoice === 'rock') ||
      (selectedIcon === 'lizard' && mouseChoice === 'lizard') ||
      (selectedIcon === 'spock' && mouseChoice === 'spock')
    ) {
      let win = 'draw'
      this.setState({ win }, () => {
        localStorage.setItem('win', win)
      })
    } else {
      let score = this.state.score - 1
      let win = 'lose'
      this.setState({ win, score }, () => {
        localStorage.setItem('score', score)
        localStorage.setItem('win', win)
      })
    }
  }

  handleSelectedChoice = choice => {
    this.setState(
      {
        showPicked: true,
        showChoiceSelector: false,
        selectedIcon: choice
      },
      () => {
        localStorage.setItem('showPicked', 'true')
        localStorage.setItem('showChoiceSelector', 'false')
        localStorage.setItem('selectedIcon', choice)
      }
    )
    let mouseChoice  = this.handleMouseChoice()
    setTimeout(() => {
      this.setState({ mouseChoice }, () => {
        localStorage.setItem('mouseChoice', mouseChoice)
      })
    }, 1000)
    setTimeout(() => {
      this.checkWinState()
    }, 1050)
  }

  handleChoiceSelector = () => {
    this.setState(
      {
        showPicked: false,
        showChoiceSelector: true,
        selectedIcon: '',
        mouseChoice: '',
        win: ''
      },
      () => {
        localStorage.setItem('showPicked', 'false')
        localStorage.setItem('selectedIcon', '')
        localStorage.setItem('showChoiceSelector', 'true')
        localStorage.setItem('mouseChoice', '')
        localStorage.setItem('win', '')
      }
    )
  }

  handleReset = () => {
    this.setState({
      showPicked: false,
      showChoiceSelector: true,
      selectedIcon: '',
      mouseChoice: '',
      win: '',
      score: 0
    })
    localStorage.clear()
    localStorage.setItem('rules', 'false')
  }

  render () {
    console.log(this.state.selectedIcon, this.state.mouseChoice)
    return (
      <div className='container'>
        <div className='App'>
          <ScoreBoardHeading value={this.state.score} />
          {this.state.showPicked && (
            <Status
              handleClick={this.handleChoiceSelector}
              selectedIcon={this.state.selectedIcon}
              mouseChoice={this.state.mouseChoice}
              win={this.state.win}
            />
          )}
          {this.state.displyRules && <Rules handleClick={this.closeRules} />}
          {this.state.showChoiceSelector && (
            <SelectChoice handleClick={this.handleSelectedChoice} />
          )}
          <RulesButton
            handleClick={this.showRules}
            handleReset={this.handleReset}
          />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
