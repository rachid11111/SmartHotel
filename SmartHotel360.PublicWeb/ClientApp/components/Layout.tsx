import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className='sh-site'>
            <section>
                { this.props.children }
            </section>
            <footer>
                <Footer />
            </footer>
        </div>;
    }
}
