import React from 'react';

/**
 *  Accepts and formats currency values
 */
export class CurrencyInputComponent extends React.PureComponent {
    // TODO - handle styling and container

    formatDecimals() {
        // TODO - format decimals from 12345 to 123.45
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.formatDecimals} 
                />
            </div>
        );
    } 
}
