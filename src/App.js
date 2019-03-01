import React, { Component } from 'react';
import './App.css';
import loremIpsum from 'lorem-ipsum';
import { List } from 'react-virtualized';

const rowCount = 1000;

class App extends Component {
    constructor() {
        super();
        this.list = Array(rowCount).fill().map((val, idx) => {
            return {
                id: idx,
                name: 'John Doe',
                image: `https://via.placeholder.com/60/5398f0/FFFFFF/?text=${idx}`,
                text: loremIpsum({
                    count: 1,
                    units: 'sentences',
                    sentenceLowerBound: 4,
                    sentenceUpperBound: 8
                })
            }
        });

        this.renderRow = this.renderRow.bind(this);
    }

    renderRow({key,style,index}) {
        return (
            <div key={key} style={style} className="row">
                <div className="image">
                    <img src={this.list[index].image} alt="" />
                </div>
                <div className="content">
                    <div>{this.list[index].name}</div>
                    <div>{this.list[index].text}</div>
                </div>
            </div>
        );
    }

  render() {
      const listHeight = 600;
      const rowHeight = 50;
      const rowWidth = 800;

    return (
        <div className="App">
          <div className="list">
              {this.list.length > 0 &&
                  <List
                      width={rowWidth}
                      height={listHeight}
                      rowHeight={rowHeight}
                      rowRenderer={this.renderRow}
                      rowCount={this.list.length}
                  />
              }

          </div>
        </div>
    );
  }
}

export default App;
