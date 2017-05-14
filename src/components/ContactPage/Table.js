import React from 'react';

import { Panel, Table } from 'react-bootstrap';

const DataTable = () => (
    <div className="container">
        <Panel bsStyle="primary" header={"Contact"}>
        <Table striped bordered condensed hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Wei-Kang Zhang</td>
                    <td>test@test.com</td>
                    <td>Javascript Dev.</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Wei-Kang Zhang</td>
                    <td>test@test.com</td>
                    <td>Javascript Dev.</td>
                </tr>
            </tbody>
        </Table>
        </Panel>
    </div>
);

export default DataTable;