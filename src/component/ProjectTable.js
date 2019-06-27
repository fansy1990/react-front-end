import React from 'react';
// import ReactDOM from 'react-dom';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import axios from "axios";


export  default  class ProjectTable extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                // {
                // id: "1",
                // name: "示例程序",
                // hideName : "example_project",
                // hidePath :  "/usr",
                // url : "http://localhost:8081/index.html"
                // }
            ]
        };

    }

    componentDidMount() {

        axios.get("http://localhost:8080/api/projects").then(
            response => {
                console.info("abc");
                const myData = response.data._embedded.projects.map(c => {
                    return {
                        id: c.id,
                        name: c.name,
                        hideName: c.hideName,
                        hidePath: c.hidePath,
                        url: c.url
                    };
                });
                const newState = Object.assign({}, this.state, {
                    data: myData
                });
                // store the new state object in the component's state
                this.setState(newState);
            }
        ).catch(error => console.log(error));
    }

    render() {
        return (
            <div className="body-container">

                <div className="container">
                    {<ReactTable
                        data={this.state.data}
                        columns={ [
                            {
                                Header: "ID",
                                accessor: "id"

                            }, {
                                Header: "项目",
                                accessor: "name"
                            }, {
                                Header: "简介",
                                accessor: "hideName",
                                Cell: row => (
                                    <div />
                                )
                            }, {
                                Header: "状态",
                                accessor: "hidePath",
                                Cell: row => (
                                    <div align="center">
                                        <input type="button" value="启动"/> &nbsp;
                                        <input type="button" value="状态"/> &nbsp;
                                        <input type="button" value="关闭"/>
                                    </div>
                                )

                            }, {
                                Header: '链接',
                                accessor: 'url',
                                Cell: row => (
                                    <div>
                                        <a href={row.value }
                                           target="_blank" rel="noopener noreferrer">
                                            {row.value}
                                        </a>
                                    </div>
                                )
                            }
                        ]}
                        defaultPageSize={5}
                        className='-striped -highlight'
                    />
                    }

                </div>
            </div>
        );
    }
}