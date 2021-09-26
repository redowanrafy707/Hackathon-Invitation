import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import SideCart from '../SideCart/Sidecart';

const Cart = () => {
    const [persons, setPerson] = useState([])
    // cart a add korar jonno state
    const [cart, setCart] = useState([])
    const handleAddPerson = (person) => {
        const newPerson = [...cart, person]
        console.log(newPerson)
        setCart(newPerson)
    }

    useEffect(() => {
        fetch("/fakePerson.json")
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">

                    <div className="row ">
                        {
                            persons.map(person =>


                                <Person
                                key={person.index}
                                    person={person}
                                    handleAddPerson={handleAddPerson}
                                >

                                </Person>
                            )
                        }

                    </div>
                    {/* akhane card add korbo  */}


                </div>
                <div className="col-md-3">
                    {/* akhane amra card calculation korbo  */}
                    <SideCart
                        cart={cart}

                    ></SideCart>

                </div>

            </div>
        </div>
    );
};

export default Cart;