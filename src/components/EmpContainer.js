import React, {  Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Card from "./Card";
// import SearchForm from "./SearchForm";
// import MovieDetail from "./MovieDetail";
import API from "../utils/API";
import ShowResults from "./ShowResults";
import Wrapper from "./Wrapper";
import Header from "./Header";
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { Tab } from 'react-bootstrap';

class EmpContainer extends Component {

render() {
    return (
        <Wrapper>
            <Header />
                <TableHeader />
        </Wrapper>
    );

}

}


    
export default EmpContainer;