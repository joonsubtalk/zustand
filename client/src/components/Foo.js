import React from 'react';
import create from 'zustand';

const [useStore] = create(set => ({
    count: 1,
    inc: () => set(state => ({ count: state.count + 1 })),
    dec: () => set(state => ({ count: state.count - 1 })),
  }))

function Foo() {
    const { count, inc, dec } = useStore();

    return (
        <section className="foo">
            <h1>{count}</h1>
            <button onClick={inc}>up</button>
            <button onClick={dec}>down</button>
        </section>
    );
}
export default Foo;