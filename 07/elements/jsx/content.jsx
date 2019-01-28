class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        polymer: false
      },
      checkboxGroup: {
        node: false,
        react: true,
        express: false,
        mongodb: false
      },
      selectedValue: 'node'
    };

    // this.handleRadio = this.handleRadio.bind(this)
  }

  handleRadio = event => {
    const obj = {};
    obj[event.target.value] = event.target.checked;
    this.setState({radioGroup: obj})
  };

  handleCheckbox = event => {
    const obj = Object.assign(this.state.checkboxGroup);
    obj[event.target.value] = event.target.checked;
    this.setState({checkboxGroup: obj})
  };

  handleSelectChange = event => {
    this.setState({selectedValue: event.target.value})
  };


  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h2>input: text</h2>
          <input
            type="text"
            name="new-book-title"
            defaultValue="Node: The Best Parts"/>
          <hr/>
          <h2>input: password</h2>
          <input
            type="password"
            defaultValue="12345"
            onChange={this.handleChange}
            onInput="this.handleInput"
          />
          <hr/>
          <h2>input: radio</h2>
          <label>
            <input type="radio"
                   name="radioGroup"
                   value="angular"
                   checked={this.state.radioGroup['angular']}
                   onChange={this.handleRadio}
            />
            Angular
          </label>
          <br/>
          <label>
            <input type="radio"
                   name="radioGroup"
                   value="react"
                   checked={this.state.radioGroup['react']}
                   onChange={this.handleRadio}
            />
            React
          </label>
          <br/>
          <label>
            <input type="radio"
                   name="radioGroup"
                   value="polymer"
                   checked={this.state.radioGroup['polymer']}
                   onChange={this.handleRadio}
            />
            Polymer
          </label>
          <hr/>
          <h2>input: checkbox</h2>
          <label>
            <input type="checkbox"
                   name="checkboxGroup"
                   value="node"
                   checked={this.state.checkboxGroup['node']}
                   onChange={this.handleCheckbox}
            />
            Node
          </label>
          <br/>
          <label>
            <input type="checkbox"
                   name="checkboxGroup"
                   value="react"
                   checked={this.state.checkboxGroup['react']}
                   onChange={this.handleCheckbox}
            />
            React
          </label>
          <br/>
          <label>
            <input type="checkbox"
                   name="checkboxGroup"
                   value="express"
                   checked={this.state.checkboxGroup['express']}
                   onChange={this.handleCheckbox}
            />
            Express
          </label>
          <br/>
          <label>
            <input type="checkbox"
                   name="checkboxGroup"
                   value="mongodb"
                   checked={this.state.checkboxGroup['mongodb']}
                   onChange={this.handleCheckbox}
            />
            MongoDB
          </label>
          <hr/>
          <textarea
            name="description"
            defaultValue={this.state.description}
            onChange={this.handleChange}/>
          <hr/>
          <textarea
            name="description1"
            defaultValue={'Pro Express.js is for the reader\nwho wants to quickly get up-to-speed with Express.js, \nthe flexible Node.js framework'}
            onChange={this.handleChange}/>
          <select
            value={this.state.selectedValue}
            onChange={this.handleSelectChange}
          >
            <option value="ruby">Ruby</option>
            <option value="node">Node</option>
            <option value="python">Python</option>
          </select>
          <select
            multiple={true}
            value={['meteor', 'react']}
          >
            <option value="meteor">Meteor</option>
            <option value="react">React</option>
            <option value="jQuery">jQuery</option>
          </select>
          <hr/>
          <h2>input: first name [text]</h2>
          <input type="text" name="first-name" onChange={this.handleFirstNameChange}/>
          <hr/>
          <h2>input: button</h2>
          <input type="button" defaultValue="Send" onClick={this.handleSubmit}/>
          <hr/>
          <input type="text" name="title" value="Mr."/>

        </form>
      </div>
    )
  }
}