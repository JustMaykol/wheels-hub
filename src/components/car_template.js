import React from 'react';
import Layout from '../components/layout';

const CarTemplate = ({ pageContext }) => {
    const { model, year, price, image } = pageContext;

    return (
        <Layout>
            <div className="car-detail">
                <img src={ image } alt={ model } style={ { width: '100%' } }/>
                <div>
                    <div>
                        <h1>{ model }</h1>
                        <h2>{ price }$</h2>
                        <p>{ year }</p>
                    </div>
                    <div style={ { textAlign: 'center' } }>
                        <button style={ { padding: '15px', fontSize: '25px', borderRadius: "10px", backgroundColor: "rgba(0, 0, 0, 0.3)" } }>Comprar</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CarTemplate;