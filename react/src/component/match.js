import React, { Component } from 'react';
import { Matches } from './jsondata'

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchList: Matches
    }

  }
  render() {

    var matches = this.state.matchList;
    var Arr = [];
    for (var match of matches) {
      // Arr.push(<tr>
      //   <td> {match.matchId} </td>
      //   <td> {match.matchName} </td>

      //   <td> {match.Team_A} </td>
      //   <td> {match.Team_B} </td>
      //   <td> {match.Tounemeant} </td>



      // </tr>);
    }
    return (
      <div>
        {match.matchId} <br />
        {match.matchName} <br />
        {match.Ateam}<br />
        {match.Bteam}



        {/* <table>
          <thead>
            <tr>
              <td> ID</td>
              <td>Match Name</td>
              <td> Team </td>
              <td> Tounemeant </td>
            </tr>
          </thead>
          <tbody>
            {Arr}
          </tbody>
        </table> */}
      </div>)
  }
}

export default Match;
