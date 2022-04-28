import React from "react";
import {newContextComponents} from "@drizzle/react-components";

const {AccountData, ContractData, ContractForm} = newContextComponents;

export default ({drizzle, drizzleState}) => {

    return (
        <div className="App">
            <div>
                <h1>Duckstore - Ethereum</h1>
                <p>

                </p>
            </div>

            <div className="section">
                <h2>Account</h2>
                <AccountData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    accountIndex={0}
                    units="ether"
                    precision={3}
                />
            </div>

            <div className="section">
                <h2>String</h2>
                <p>
                    Read and store a numeric value
                </p>
                <p>
                    <strong>Value: </strong>
                    <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="DuckStore"
                        method="aNumber"
                    />
                </p>
                <ContractForm drizzle={drizzle} contract="DuckStore" method="setNumber"/>
                <p>
                    <strong>Stored String Value: </strong>
                    <ContractData
                        drizzle={drizzle}
                        drizzleState={drizzleState}
                        contract="DuckStore"
                        method="aString"
                    />
                </p>
                <ContractForm drizzle={drizzle} contract="DuckStore" method="setString"/>

            </div>

            <div className="section">
                <h2></h2>

                <strong>Object</strong>
                <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract="DuckStore"
                    method="duck"
                />
            </div>
        </div>
    );
};
