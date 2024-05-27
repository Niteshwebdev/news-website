import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Card from 'react-bootstrap/Card';

import { Container, Row, Col,} from 'react-bootstrap';

const National = () => {

    const [print, setdata]=useState([])
    const nation=()=>{
        fetch("https://inshortsapi.vercel.app/news?category=national")
        .then((res)=>res.json())
        .then((pr)=>{
            setdata(pr.data)
            console.log(pr)
        })
    }

      useEffect(()=>{
           nation();
           const interval=setInterval(() => {
               nation(); 
           },10000);
           return ()=>clearInterval(interval);
      },[])

    return (
        <div>
           <Container fluid >
        <Row xs={1} md={3} className='g-1'>
         
           
           {print.map((value,i)=>{
                  return(
                    <>
                     <Col className='container-fluid mt-4'>
                     <Card>
            <Card.Img variant="top" src={value.imageUrl} width="100%" height="300px"/>
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>
                 {value.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">{value.date}, {value.time}</small>
        </Card.Footer>
          </Card>  
          </Col>
                    </>
                  )
           })}
       
        </Row>
      </Container>
        </div>
    );
}

export default National;
