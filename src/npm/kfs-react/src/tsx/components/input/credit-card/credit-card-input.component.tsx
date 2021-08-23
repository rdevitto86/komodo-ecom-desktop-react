import React from 'react';

/**
 * Accepts and formats a debit/credit card number
 */
export class CreditCardInputComponent extends React.Component {
    // TODO - handle styling and container

    formatAccountNumber() {
        // TODO - format decimals from 1111222233334444 to 1111-2222-3333-4444
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.formatAccountNumber} 
                />
            </div>
        );
    } 
}
