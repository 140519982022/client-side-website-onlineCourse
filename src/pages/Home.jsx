import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import headerImg from '../assets/images/header-bg.jpg'
import '../assets/css/home.css'
import Card from 'react-bootstrap/Card';
import { FaPenToSquare } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { FaPlusSquare } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Header />
      <div>
        <img src={headerImg} alt="" className='w-100 header-bg' />
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12">
              <h1 className='text-center pt-5'>
                Via School Categories Courses
              </h1>
              <p className='text-center py-2'>
                Cum doctus civibus efficiantur in imperdiet deterruisset.


              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 py-3">

              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3 py-3">
              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3 py-3">
              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3 py-3">
              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>

          <div className="row">
            <div className="col-md-3 py-5">

              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3 py-5">
              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3 py-5">
              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3 py-5">
              <Card className='text-center border p-4 border-gray border-2'>
                <FaPenToSquare className='w-100 fs-1 text-primary ' />
                <Card.Body>
                  <Card.Title className='text-primary py-3'>Design</Card.Title>
                  <Card.Text>
                    Over 800 Courses


                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

          </div>

          <div className="row">
            <div className="col-md-1 mx-auto py-5">
              <Button variant="border border-primary">View All Courses</Button>


            </div>
          </div>

        </div>
        <hr />


        <div className="row py-5">
          <div className="col-md-12">
            <h1 className='text-center pt-5'>
              What We Do
            </h1>
            <p className='text-center py-2'>
              Cum doctus civibus efficiantur in imperdiet deterruisset.


            </p>
          </div>
        </div>

        <div className="container">
          <div className="row py-5">
            <div className="col-md-3 py-3">
              <Card className='border p-5 border-gray border-2 text-white card1'>
                <Card.Body>
                  <FaPlusSquare className='fs-1 text-start my-2' />
                  <Card.Text className='pt-3'>
                    Create Account
                  </Card.Text>
                  <Card.Text>
                    Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 py-3">
              <Card className='border p-5 border-gray border-2 text-white card2'>
                <Card.Body>
                  <FaPlusSquare className='fs-1 text-start my-2' />
                  <Card.Text className='pt-3'>
                    Create Account
                  </Card.Text>
                  <Card.Text>
                    Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 py-3">
              <Card className='border p-5 border-gray border-2 text-white card3'>
                <Card.Body>
                  <FaPlusSquare className='fs-1 text-start my-2' />
                  <Card.Text className='pt-3'>
                    Create Account
                  </Card.Text>
                  <Card.Text>
                    Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 py-3">
              <Card className='border p-5 border-gray border-2 text-white card4'>
                <Card.Body>
                  <FaPlusSquare className='fs-1 text-start my-2' />
                  <Card.Text className='pt-3'>
                    Create Account
                  </Card.Text>
                  <Card.Text>
                    Sed cursus turpis vitae tortor donec eaque ipsa quaeab illo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className='bg-light'>
          <div className="row py-5">
            <div className="col-md-12">
              <h1 className='text-center pt-5'>
                Browse Our Top Courses
              </h1>
              <p className='text-center py-2'>
                Cum doctus civibus efficiantur in imperdiet deterruisCum doctus civibus efficiantur in <br /> imperdiet deterruisset.
              </p>

              <div className='text-center py-2'>

                <div className="container">
                  <div className="row">
                    <div className="col-md-3 ">
                      <div className='card-style position-relative'>
                      <Card className='position-relative'>
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                        <Card.Text className='text-start'>
                        Updated 21/12/19
                          </Card.Text>
                          <Card.Title className='text-start'>Fashion Photography From Professional</Card.Title>
                          <Card.Text className='text-start'>
                            All
                          </Card.Text>
                        </Card.Body>
                      
                        <Card.Body className='d-flex justify-content-between'>
                        <Card.Text >
                        <FaUser />
                          </Card.Text>
                          <Card.Text className='text-danger'>
                            FREE
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      </div>
                      <div className=''>
                      <Button variant="warning ">Warning</Button>

                      <p className='py-4'>
                      Preview Course
                      </p>
                      </div>

                    </div>

                    <div className="col-md-3 ">
                      <div className='card-style position-relative'>
                      <Card className='position-relative'>
                        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUVFRUVFRgYFRUVFxcVFxUWFxcVFxgYHSggGB0lGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0mHyUvLS0tLS8rLSstLS0tLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABCEAACAQIDBQUDCQYGAgMAAAABAgMAEQQSIQUGMUFREyJhcYEykaEHFCNCUnKxwdEzYpKisuEWQ1OCwvAVJFRj8f/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EADERAAICAQMCBQEHBAMAAAAAAAABAhEDEiExBEETIlFh8DJScaHB0eHxFIGRsSNCYv/aAAwDAQACEQMRAD8Azc1ylZktSVeitwTtdFFrorjAVw0aimuOAKBrldrTg0XGtS+TTBLNDJmJ7j2t56/rWWIa1L5J5/2yE6FUf1uwP5VF1q/4yjp209i7wbIiX6t/PWpKKFQNFAphLj404tTSbb4Hsj315CaLXGciUMQLcBSO8mHjOHNgubSx58RUDNtaRuGlNZpXb2mJ9a1SpNUGsLtNvgaYb2iOlMHHf9acYI/SsKe4/AqAHHGiumUWNMRjZCAvaNlHAZjb3VHuasGA3bnnAcAKp4FjxHUAU+l3dwsGuJxIHhcLfyGrH0pkUIllhHuU8U8wuCkf2UY+mnvqz4SaA6YPAyTnk5Xs0/jk1+FSUey8dL7ckOGXpGvav5Fm7vqKPS2Jl1KXBTcbsqRFswtfhSKxlMK687GrntjdwRRdoJZZGBGYyNmuCbaaaa2qsTp9G48DSpWnTHwmpwshtwNsY2KRxBB24IBZSctrXscx066VdsXvBiJQElwrQebZhfwIFR/yVt9JKB9lP+VWzezVEQC5Z1Xx1OvwvVWSmebdSIvdp0w6MCO8zFiet/0qWixyE3vSzYCPKBlGgpj/AOMUnmKll7jlT3JTauIUYdmuLWFvO40pruvKrYc8PafN66/nUHvTsvsoC4Y6W0JvzApHcrGd118b+8f2o77sFQ8uzHW8seiP4W91Od0MRaR0+0oceY0P4/Cltsw5oT4a1A7FxOSWF/3+zbyfSlw2aYx7waNBkW4I6gj30XDyZlU9QD8NaPTbA6Kw+y7j0zFh8CKp7khHzCkMtLyamuhalopuhPLQpW1CtoyzzhPhDbgfOmDrarWEGtR2MwYOtetDL6mZOn7og6FKzYcr5UjVKd8EjTXIaga5Xa444a5XTXK0w6KuG40x7QAG2ZWX/l+VU+rBuniMsq6/WU+l7H4E1P1Mbxsf0zrIjROz6mjADpRZ8QiXzMBUfNt1BoiljyrxIwlLhHrSyRjyyUN+lc4mw41CYyfFkA9kyBuF1I/GibsJJ84uxJ0I1pjwtRbbFLOm6RKrgmSQueBpzibladbTS1qWeAdlfwpOq6bHXsSGy9gSywpnxUqRkXCRnKbeL8fSpfAbsYWE3WFS32n77X63anGwHvh4j+7b3Ej8qdyzqvtMB61dBJRR5ORtyYpTTG7UhhIEsqIW4BmAJ8hUZjd7MOjBA2diQABrqTYDT86xbevbZnxM0l7gyMF6ZFOVbeFgPfTIrVsgK9Tcds4lHw7ZWBvlt42YHS/HhVKxMfdf7prKMPipVa8LSK3/ANbMrfym9P8AD76Y6PQzZxwKyoknoSwzfGun0cpu0x+LqFjVNEtsjbUuFYvGdSLEcjVk3A3hkxGNcztc9n3ByHeF7D3VS03tjb9rgID1MLyYc+du+D7qs272+uzIjf5q8TWtmID/AM6ksf4aZkxSp+XcVqizWZpKYLNZqhMPvlg5vYxMYvwDOIz7pMpPup4j3731evL0PA15uSM090PhVch9+pf/AE39P6hVY+T6YFpB5VPb6HNgn8h+Iqr/ACeaSyX6Cm8wbNjtsaM0eZGHUVSZEK9ovMd4eYN6t2KxvZrmyki4GgvxNqg9pwZZ/Br/ABoVuDwWzB7VjeNZC1gwB101560SHEqWmCkG+VhbxUL/AMazba28UmFiSPIHXMy6mxFjwqz7i4wYiLtR3eK2vfUEjjTalVi3FLcsCR21NEpw9JWoHE1M5ahRrUK7SbZhsaA0WTDilo7A60ow1txqmy9LYhsRhajJ8Dfhxq0PFTU4e5pkMrQmeFSKm6FTYi1cqz4nZwYWPp4VDYjZsifVJHUfpVMMykR5OnlH7hka5R7VzLTbEUFFSewSDKoJsDp5XqMNOcC+Vxb0oMiuLQWN1JM13d3dlMU5mlY5WAIUG1ifaBPHQ3FXrZ2xIIf2cajxAF/U8TVI3L2oAjAnKLBx4BhqP4gT61I4je5Iie/m8q8pS7MoyRdj/f6TJBmGlmH51SdgyfTK3Un40tvFvEcWmS2VL38TaorBzhCDfgRWtWmbDai6bbIy+tImf6K3hTfaOJzJfyruHwTvFmUioUtj0dktxiu8s8EfZowAueN9OttaiZdoTTGxZ5Cfqi5+A0q27v7qrKSZxex0FzbzNuNXLB7HiiFlQAeAAqyHGyIM0oqbMqGBmghfFPHkWJWZcxAJex7MAffy1mw4W6Vs/wAtWOCYSKAW+lluR+7GL/1FKxjKeFXdOvK2yacrZJ4KEKud+B4Zhoba2GeNkY6faB0qNYKX7tyL/WFj43APnwNSeKgCxZbJn4m+VXA46Zwj304WfnaoyIcT4W9+n602PdmMkDsbuK9mYMMzdmsjGPXQPdbAcbEE8DTKPCKSbSKDyDaX/SneGchha4c2uRN2bsX1Hf4DivHhz52mu0lsVmaQhdbSYaPGRhW5maM5lucx06UDnKPz+TtJWk2dKzFURpCBchAXOW9r6DhcjXxpGKWWBjkaSJueVmjb1ykGprFYnDAgmKJ7m+fCyzQlbH7EyEKfC1I4/HLIAonxBQa5Z7PY/ulWOnoPKjjkb5RyjbpHcPvljU0M/aDgRKkctx4s6lvjUzsb5RpICf8A1IO9bN2d4r265xIPdaoltmtKAE+bSkqD9HKiyai9uzkKsWFtQB76Rx2yhH7cM8RH2lJX0a1racr0LeKWzRqb9TQ8F8q2HIyyRyJ/tDL/ABKxb+SpF97cHiWVknjB00ZxH7u1yE+6shj2cGAKyxk9CcvxbSiNs6UXOS4HEjUD1pb6fE+HQWqRt3zHDyljPGJI75lJ9m9tdeBqxbuxRiM9nCsSZiFCgDTrp415pjxLxHuM8bdUZkb3qQa3f5MdpSy4MGU5jpr1OoJ9QFY+LE86Xkw+GrsxPUWxxRa7IRSJkqdhoVtQogNCsOoxGYUIprDheg3Sk0Fqeej3HAcGig2NJsKTBrKOsfJY0qEFMUkI50Vpix8B8azSEpCsmxknvZQDbRhoSfLnVZ2hgHiYo6kHxFtOoq54PEhbVY8JjIZgFlVW+8oP48KKGaUH7CsuCM1a5MZIrsRsau2++7IgbtYkPYvqDb2TzUn4i9UsrrpV0MimrR5k8bgy1bNxTWBudQbi/EcfxHxpo5zMct214WN/I+NOt14g5S40Di48NSR7lNbRhNgQR+xGq+QGtQTnok0kVSpxTZlGy9gYuW1kyDq2nwq47D3DFw0zF/DgPXrV2TDAU4jpWqUudhbaXBUNubMjQ5QLCwo+zbLHYU63uFiD1BFM9kDNCx6GkThSYyORurZMbuPdnHgPzqeqtbtt9Kw6r+Bqyk21PAamn4foE5PqMM+WXaPaY4RA6Qxqvkz99vgUqnbPclwNLX1va1ud7gjh1FqNvDtD5xiZp/8AUldh92/d/lApXYyAEsSBobagG/UAyRk6X9lr68DXopaYClySm0doR9kQYgVY5R2chReFwbJJJGbELoFU6cqgQgIUCwzNzNrDgLngBx1qR2hjonFiWa4sGFnII4A9qmcX04SNpemTHK2uXuLYA668NBwJBYtY9DWQVIJ02L4WJZWIyxC4uAZexIsfZDP3CTccelSUWzOzVZEbG4a4DZ+zMkZut79pAwKjzB0plhMOjjXsW7yrlEhglbMw9nODHztfl4gU9n2V2CmSM4zDnKSDkDoxF7AYiBgPW2lDJ9r+fPY6X1N1+hF7Xx0klledZwLEOAb8xYs6K/ofCoxqlG23K1+1Ec1xa8saM2gA0kAEg0HJvHjrTXGzxv7EKxHnleRlOnSRmI18aZG1tXz8P9AsZineD2hLF+zlkQdFdgCOhANiPA01tQo2k+QR/jtqSTAdoUYg3zdnGrnS1i6qCR4GmqzEcCR60lRDXKKWyOsEzM5Ci5JOg/eNhoOpsPcK9I7l4IQ4OJQPaGbzAsiH1RFNefN2sMZMVGAL2OYfeHse98o9a9GSz9mqRoNERUHkoAH4VN1ckqiMxptDqYA0T5tfnTOLO5p2qlahuxvAsEtQpPtzQotSMpmJNRXoA0VzTj0TjNQWiXo6mtBOT6C3WiobUW9zf3UatODiSlYsQQaa1wGso1SLVsrFM5CiQi+lj3lPgV4Gqjvhsv5viWUKArAOAOAve+U9Lg0+w0pGoNjUljXOLVVm1ZQRHLbUX+o/2lNuPEVkHolfYHNDXEhd1sSqlgRxAPuvf3gkH06VvGDclFJ45Vv521rCdhYQCdRycFRpfVtLfGt3jWwA6ACl5q12iaaqCTFS1cWSkJGoiNS9W4qhrval4Q3Q/jpULuo2ZJV8b/D+1WHby5sM/gL+7WqvuVL9JIvVR+dbJWdElNiPbEDxBFP9+9o/N8BiJAbN2ZRfvSdxfi1Q0E4TFKL/AF7fjUV8uO0ssEGHB1kkLsP3Yxp/Mw91F0yvY7LzZjJp/OB2KW+0bnTQ24aSEagA6op04kUxFS+0FIhSwASw4o9ySb3RnSwFwb5XPHgOFenJ7oQiNw4uw8NT5DWpbd7BnESmLNkzBmLZVY90HugMyi2tzqNF9DEw8GPkvv8A7A1KbrgfOUYq7Kl2bIhcjQgGw5ZmXWhycMKLpktPsFlkZGgjnsBbs5OwNiQpf60YAa6knS56WqNxUMmHPaYcYuIBiGY2yhgRYCWLuv46DgKtG2NqrNwxAVbqtkkkWXMTlu7OgyBbD2FIIuCKWXtkyLFjFldkBCyxZbqNDldSs2W54ZTe3PWpvEaVy/P+DkknSKNLteR1yuI30IDNGmcXFv2gAY246k61HVa9t7KxhBRsPEQtiOzRO0RRbwExHXODx11qryRlTZgQehFj7jVGKUWvLX9jpJidco1qKaaAA0RjRiaSkNakYy6/JNgw+KDtYAMo18Lvp/uEXvrdjGo5Csy+R7ZyrCZmXy0vZmNz/IsJ9aveJlPtAG3WxtXndRK5tj4rZIkC4ApvLLUcMWa786vUzkMUR52lCmnbCuUNm0ZEWtSLnlXWNdVatLDq0WU8qUpEm9cjjtdvXBQatMAaLehXK44URqsG7WKUSZW9lgVPrzqt3pxh5bEHpQyjaCTLDuxgjh8auHkOYK2aNuotdT+HqCK1DNVJwQEoE31zHGq6ah0l6+If4VcEfQeVSTl5ifIuAzPQQ0mxrqUKYtoc4sZomXqp/Cs23IxhXF2bmrA+YIrR1BcFV1PPXh50z2dutHG2djdtfZFuPHU6n4U7d9gFSW5XnwJONMgOhdTbxFh+VUX5X9odrtAoDpBGkfkx77f1L7q3WKBIwSFC6XJ52HU8a8y7fxnbYiWY/wCZI7+jMSB7rVR00KlbF5JahDZ0GdwLE+AzE2Gp9kE8AeAPlTvaM7IGUdnZ9LowV+RIcIEzf70pGNVWMZ1fKx0K25a3BZSp1A4Mp06GmcjZiTct4niRwF9TytzqurdgcIORZFHW7fkPwNCKRlN1YqeoJB94o2IFmte+XT3Vad3tgrKitNFZApbOHS7lrFRcMAlhe4fW9hY3sMlNRVs6tyzYTCh8JEZ2Dkx3Z5DmPfvlAlmuARe/cU+zx0qJx27eGbJGqvmAGYDVyuUd7s2uxJOugUcbCw0sE05DC2txYNdx7OgAlYFm1PBFHA252z/b27uIEzkRZwzsQEOdtdf2ZJkHqKixtOVaqGy9aOYqyo6Ji5VyhrwTLLGdVIyhO8max6jjTLDbcnRQglLRj/LkCyx+QSQFQD4Co+YMGIe4bmGuG9QdaJVqgq9ROod47GCSx7KKMgWPZqUDeJW5APkBTImu0U0xKjGzhNECFiFHEkAeZ0FGNSe6+EMuKjUccwt94kKn87LRN6U2Clbo1nZWz58NhYXiQ5SM11GbunRCRx/ZrHUpgd9XGkiKbaaXDe61qu0EQRVRRYKAoHQAWHwpHE4CKT240bzUE++vPtdzpwk5OUWU/ae8cMhXLEeOpBAJv+PqK6k8bC6uR1DAaeo/SrE27eG5R5fIkfnRTu1hyLEMRx9rnQuMH2Ni8q7kJk/fj/j/ALUKmv8ADOH6P/G1Cg8KIzxMnsYe6Wri6UtnB40V0trTD1KCOdDSS9KUfhSCN9IR4VqMYYHW1GpGNu8x6C1KR61pwDXDRjRTXHHL0dDSdGFccXXc2e6sh+oyyD0Ov5VfAegv5Vme5WKCYhMwBDEKQeBvpWxyiwsOVTTx3IRnlpaI1MKx46fGofamJIbsoizPxIC3NvAD8TpVmLAcaiMftWOG5AFzx6npfrXVCBPU8myFNgM6A9oGFwMoYjMSL5rKLWFL4zePDxe25B6WNZpvBvI7Me9p05evWo+HefGBC4aXsw2Ut3sgbTu5uAOo0ok5vdIfHplFeZmo7e2h22AnfC3kZo2RQgLMC3dPdGtwDf0rz5icJLG2Uizc1YFW5j2JACePIGr1svfmSKUN3Tf2u6AWHQkDX1q+ttKHGxE5O4O8zFYpVUgXsyPrqdBl16EcabDI4coVlwtccGD7M2fJiJVgjhLSNrYDKQul2a+iqBzNhr5Vc9pfJ2sMYK4kPOLEpYCNj9hXNip/eOh6Ly0pMneWJOzd1BaQgAk8RmI4/hrUDJu7OQWeSPMWOgYsCv2uF+PK3rQz6qTfl2QWPBH/ALsxh42DEOCCGIbTUG9jcHmDernsrEyRxkQ9nPEha3feN4wTfKGlUxjQ8Qbm/EUjt7cfEGVngdZy7MSihldb+BuGHK9x5VX9pbNxmCYGWN4iRoysOHMCSMkX6i9VXHKlTX3CGnBtNMnNobQ+rl7FCx7SOeGQxszBmJaaJmd7l1NtBqptajRK4H0Ymyr/APGljx8APAnsXuyDzJ41XX2/M0bRtIcr2zGwufNhq3H616YoSCGU6jgQbEeR5V3g7U/nz3sxzLFDvSwZllijlQkh1yqmYg6MysrqD4BRSwl2bPxVsOxsPrKoOnNe0FuP1F48dKgMVtSaRQkkjOBwz2Zh5Oe8BrwvTPNRLCu233AuRaTumJNcNiY5RfgdCLkgX7MuRw+sFqGxWxMQlyYmYDiyWlUeBaMkL5G1R4axB5jgeY8qcSbSmYqTNISgIQl2LKDa4DXuB3Rpw0olGa7mNoZmtA+RrZ3aYsORol29FF/62hPpWfvW1fI7hxDhXnYe0VUW4kt3zbzUw/w12eWmB0FbNPrtQ77QkYgLZb+vxOnwoSdseEjedlA+Aryn1UO1so8GXfYmKFRjNIAArEnmTb9KKm0mU2cAjqND/et/qYd9jvCk+CVoURJQRcEUKeKPO0lxXVm9R0oxk6603dRyNjRnp2Lsbi4plM9pI25Hunz6UftGXW36Gkp7EG2t7G3AhhzFFFASdoPFqp6s5HoKcgWHnTTZ0mYqDoe8SPEmn7C/4CslszYbqxMCiGlHGlJ1gQWhXedSGG2eWHe0HLrWSklyclYNjN3geYIPxrVMXvQqi17sAL+dqz/DYRU4D9aW3gX2JRwYZT95f1FvdU0papUgnji61FhxO8xbgahMVtPMbmoRX8aSlxA5msWILyx4JieHCSi8gIIvfI+VjcdCLG35UbYowmHLBppZYXUq0MijKb8CxXiRxBABvY0TYm77z2eRhDEeBIu7fdTp4n0Brm2NhQxezibgXLZh2bBeRGjCQ8svcvfjypkU1tYieSFi26O6EWImmLfSYSO2QnMrlyb5MwIYFQBc8CGXgTpoGCwEMCFIoxGl8xFybnqSxJPvpvuwirhMOqggGJGNwASWUMSwBIuSbnU+dP50uKDJNvYTdshcVtNGcqAco4t18hUW+0rT9qTdQMoXlbhXdqnIpPBmJsPDqTVcDG+mtqSlZZGKosW094AiERKIkOpYaE+fOm27wM5aSWNTEUIU4juoxzKbqWUkaX71reNM8Liiou6KxBuuYA2PXwNR+194GLAFySdNOA5U2Cd7ICcVVE7tXcbCSjOYJIb94PH9LG1xcMWQt3bdSoqp4z5NZCM2GnSZfMAn45R/EalNm7XkBaSNgMpBbI8qyZtCGK2AYm47uTKbrx1p9/iv62IRGa2hmT5tKV5FZ4mNzoQVHPmtrGyMpx4Z5rSM32lsLFYf9rC4HWxKnyPP0pgkyC4dCTbSxy2PUi2o8NK2qHbkRW/ayQg20dRi4cpW4+kiswJ1FnJbnYgglLFbBw+JUMcNFKGGYSYWRWOU8HKd1iT4I1NWf7S/wDpMcRFYEiRVIv3WDai3JgCL+BtRRC+UsEJUGxYAkA+J5cavW0fk9RldsK8rMov2TRt2l+QNwCpP7wUeNUvG7NlgOV1eNjpllVoWNuNs3dI8mNOjOMuGA1Q2ijLsqLxYhR5k2H416I2ZhuwwGHKjQnPYjirqxQHpZcg9Kw/dDZryYuJSCLkWNri5IRWB4GzOpr0jtTDgwlQPZy2Hlpb3VP1TvYPHsVn/ABJBezh1PlmHw/SncW3YDwl/lcfitUrGJ3yPGnGHhrzHghyizUW19rx/6hPkG/SmGK2+ALRxknq2g9w4+8VHpHSXZXasWGHc3US+A3iw6oBLKTJdi3d5libel7elClNn7LwxiQupLFFLakakXNCq1ZK5QsyQmk2o7URqaj0Al6SlANKmiMKJAsYm6sGB4VO4aUOARUHOtLbBxnZSi/stofyNHONxtC4S0yrsTa4dm4KTTiLZB4sbeFT8bAiuSV57zPsV6UR8OCVToKcBaMTXCaBtvkKjt6Wlw5ngkhBs5GaM9HXgPXUetNyaPhpSrAjlWcboxq1RUV2FjSeEg8LW/wDyn+E3Sxh4I3mxAq8Y/e/5sydpZkkF1zC1ipAdQ45i97NxvpVn2dtfDygFSOuhzD4aj3VX4smr/Igkqf7lT2Hu1iEUK7ge81NYPcyLNmkBkJN+9w9w/OrVAqnVSD5UdzbQUNdxTm+wxweDC30AAuqgcAo0HwtXZVHgKWxD2FQO1cdlB1pM2o7DYRcmQ28mzzmzZwR06VWZ3C6DjR8RtB+0bU2OhHKoz/yUQmVZc7AnviMAtbpqdL10INljlpW4ltTEkIwEmRzbKSrEHXUBgLKQNdf71VgZYckrZggaytfOgKt3lvfje/duDrWxSYLB45dMFluMuYAR8BYZiNGI5BgbdKTwW6eLwo+gxPboNBBiACoU3v3gAW8FGRetWYskYqqPPyuUpWylYeRpYw8uSVVyjs0urAL9UqwAZjqCTnYE5iG1paXEji7tEgBdEmjzknitibu1+GYZQMp1uLGyPsRmZRiR2J7ozqQgZdRlSFbxggADRr68LWuf/BrsuaGSLEobhTcRlWBIN1YNwN7kMDx0rtSAKrHIrkSAGJFNrxSoFDHXOUAsb29kX5iwuDXcJFiJJj2bCZ/bCdm6O4XvCSQiRZLm4sxLXv0FqvOE3GghQSYubKALMqP2MdtMqtJYSPbX6w8uqW0t/wDB4ZCuFjVtTc27GPNzY6Z3Pkut+Nbq9DCR3ZwO0u6+JnCi5LQsFnZgbHWQWEZvfRbi3XkTePe7BwqUI+csxKiKNRKC3DKSe7ztbU+FZbvBv3iMUGRnujaFQMkdvug3bzYnyqd+SjaSnECIIqv2cpDZVzHQdxW4gcWyiw7prpYmlqaB1Lgse7W6vzfFPjDHHEW70cCG6xm1gCRYWFyco+sR7OUCreS8ntMfLgPS1cVKkcLCbX5e6kNub3GbIomI2Z3215mlY8GR0qf2lh7SN460ykFqWxidjHLaidmbMw4qCw8wNPjXcTMBUnu1ZmudQAT+lYuTXsrBFgcUwDOcMrEXI7FSQfE9aFTzYo8kcjxjv8aFOr3Ef2MBZRSbL40o1JtTj0AhBopU9aPQrTBvMlM5Vp+41prKtHFi5otO7e0c6ZWPeXQ+PQ1MlqpOymKsCKtMOIuKizY6laKcUrjuOGNJ3oF6IDSkhgcmgrUUmuLxraOF8fgPneHeD/MHfiv9tfq/7hceorPsKcTC4EfaI99FAN7/AHOZ9K0CCYqwI5VoO64gKtIkarISS55kniRfhfmBTsObRcXwRdVibamiD3HwG0mUPjG7JRYqo/bNbk3HIDzF78rCru7gUnJOBUdisYBQTyITGLkc2pirDjVG2vjySRepbau0L86oe3dqiO553sPGl44vJIsiljjbFp87sIoheV/5R9o/lV43Y3HigUM4DudTfUX/AOVUPc3euLDOTJF2pY3Lhssg8MraEe6tX2TvdgZgLYlEP2ZCIm9zaH0JqmUJR2JsmRy3RKQ4W2gHDh0HlTlYajNob1YOFSxnRrcFjIkYnoMpt7zWeby/Ko5usH0Q66PKf+Kf91rYwb2Qmm92aZtXaMGHS88iKpHBtS3knFvdVA3h+VFUGXDRhBwDyAE2/djH4m/lWU7Q27LKxYsbnixJZz5saYJEznmT1/U1THp+8gXKK43JnbO802IbM7s55Fze33VGi+nuqHAZz18TU5gN3GOsndHHW4qV2dsxWcRqLAanrR+JCH0mOMpckFhNikqWbQAaX0ueljrUjs5DEVdCVaNswce0G8D/AN41I7ZTvCJdOQ8+FJbQiCJ2Q1bKTpr/AN50tzcuQvDS39C4bE+UmNiExSFT/qILqfFk4j091X/Ze3YJxeOWN/usLjzB1HurBdjbNDB2OYuuiKup1VrlgLnTS3DX1qOm2fiQb9jKLcDlbT1tQPFG9nQpTl3R6G2xG7ax2v8AvXsR5jh8aq+MGLHGFT9yS/8AUBWU4XefGQ6LPJpoQZGNvC16fr8oONH+c/8AEn5xmgfTTfFDY5YrktuI+cH/ACSPMr+RqY3UWaOZZJBpa1tQqg8Tc2ufGs4k3+xh/wA1/wCIf8UWonG7w4mX25nI6ZnP9RNcumn7Gyzwo9CybzxAkGSIW5FmJ/poV5oLUKZ/TP7X4CfFj6fj+xZmohozUWhPUC0K7XCK44JbU+VIutLDn6UVhRAtC2FTnVi+a2hWUXuWZSPAKGzfGonZcOZW8Cvu1/Srbs+8SYYsLEziQD9wlUB9crUjI9wm9MLIaOW9HJqW3x3fOFk7SMfQue7+4x+ofDp7uWsEr0pobGakrFwaMDSSmlL0IR0mpTYm1DEwN9KiqBFY1ZzLjj9uXGhqDxO2SedQ7yGm7GsWP1BpLgcY/H90kmqljYUnIYTKGtoG0Ho3Cr7gNxpMbhmczdjnI7K6Z8yjiWGYEA6WIPInUEVUts/J3tDDXIh7ZBfvQkvp4pYPfyUjxq7poxXemed1c5T2iyvYrZcsftIbdR3h7xSUOLdCCDw4X1/GjwY6WIlVZlIOq8LHoVPD3VIptGGT9sig/aAIPrarG5LlWRKWSPv93z8xhitqSye059AB+FN4cOzeyKt2yti4VyCe0Kk8YwsvpluCPifCr5svdrBmww8qsw4qTaT1U2YeVqU80Y7RQxTU+Xv+Jl0WwTGnayqcgIBF7G54X0NvWrTsDYryIrwpEAb8XS6AG12DEvc8RlyjUam9hoLJh4FMZOZiLGNFux6i39qhNztkMVaAHspIGKGwvK0RZnhd7nJbIQL2PeRhbSpp5pSWxRGKXI1bZDqMpSRhbusULJw19ouOttTyPhUDPg8UpIEfaLfgsBQgn96EK3retJ2lhpMPY9s7cgMsZ5a6Iqmw68KYYjbGLQlWC6C7ZgQFXjmYliEHibCgi5LsY2n3M+XZuOaZY4o5FYxmQpIjMUAbLmGZcxU6AXub3150+2Fu9i5JJlmVXmiMJ7OSwQpIshuy6XvlsLjiD51L4LarvJNjDCGV1jiiswT6OMuTIFHeAd3Yi4BKqpIpniNtMJfnSxOpCdm65Hk7SPNcWuoGdCSwF9QXHEij1Se1fPmxtKuST/wliiWIZFzjKQ8mgW5JsIwQAbKbDha1RsfyWwoM02LseQjCpb/e9/6aerttpFzxxrIl7Ehb2v8Aa7N/SugL2UrvhFs2S4vMhYXNjd3sttfD4UOqaXoDpg3ZA75bJwaYXJDN2ssbRnM83aOqtIkRXQaJeQEgc1GmtUGWAg2ve3P9PCtQXZ2EkZYlkOHuA75isq5lN44lZbAi5zlsxF0QC/eAV2puW6KXR45VAJOUkNa1ybHQ+hJpuPNoVNg5IXuZQIjTvCbLd9dFUcWbRR+vpUtjcbBCbKO1b+Uef/T6VCY7GyTe2dOSjQeGnOqVKUvYkty+jj1f5Ie2wS6GSRiOJUAKfLun8TQpsmxpiAclvMqD7idKFd5ftHeD/wCmTbUU0KFSnuHL100KFccJrxPkPxrrChQrTCW3Zxixy2f2WFjpe2t72q572G6wzJ7AWNL8O8rE8DrwNChSci8yByK4F9xeGSWMxyLmRxYg/wDdD41jm3cAcLiHhJuAbqeqnVSfG3HxFChQIVgbuhCOS9Ko1doVjRamKCuFq5QoQhJ3qwbo7t/OT20v7BWIC31kYHUHooPHr8aFCjRPnk1HYv20tow4aPPK2RAOOVja3Kygmqdj/lWwcf7NJZehChF97G/8tChT8ONT5IJOkUveb5Q48WLPs7DNyDSZ3ceTrkZfQ1Q5SCSQMo5AEkDwBYk+8k1yhV8IKPApuzsMrIbqxU9QbVLRbxy2AkAkAtYnRhboRQoVsoKXKMatUyz7G36mUhEmdh9iUFx5ZuPuIqawe3o+3Ms3aRvlKhkOZVBN7FQQSt7aHNQoVJlxpOkJyN446ov9C44TEdpHmTEF1OhJijUHwI7K/wAaTncOfpbuFIPeZmW41zBSbAg8CADQoVL3ophNygpEXLMJZAFOnEmx/PWm+2IEWxAQW8CG4ciFt0oUKbVOjrtNi+K7NEWzO2ZRq4WS1+mcWHu9a7hYo3yyrmzICLLbKTlP1GsL+RAoUKF8G2ypbb2jFCzNdnJJIGWwPW4Ol/HT1qsbR3inlXJnZIz9RWIXyNuI8OHhQoVVjhGrJcDc4qcuQbt7uyYuWJQRHHLKYhIbNZlXOwCg3Jt1sNeNbvu5uHgsGBliEkltZZbO5625IPBQPWu0KTlm3JoqRne/uKCY+ZQoABQcB/pJQoUKFJUYf//Z" />
                        <Card.Body>
                        <Card.Text className='text-start'>
                        Updated 21/12/19
                          </Card.Text>
                          <Card.Title className='text-start'>Fashion Photography From Professional</Card.Title>
                          <Card.Text className='text-start'>
                            All
                          </Card.Text>
                        </Card.Body>
                      
                        <Card.Body className='d-flex justify-content-between'>
                        <Card.Text >
                        <FaUser />
                          </Card.Text>
                          <Card.Text className='text-danger'>
                            FREE
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      </div>
                      <div className=''>
                      <Button variant="warning ">Warning</Button>

                      <p className='py-4'>
                      Preview Course
                      </p>
                      </div>

                    </div>
                    <div className="col-md-3 ">
                      <div className='card-style position-relative'>
                      <Card className='position-relative'>
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                        <Card.Text className='text-start'>
                        Updated 21/12/19
                          </Card.Text>
                          <Card.Title className='text-start'>Fashion Photography From Professional</Card.Title>
                          <Card.Text className='text-start'>
                            All
                          </Card.Text>
                        </Card.Body>
                      
                        <Card.Body className='d-flex justify-content-between'>
                        <Card.Text >
                        <FaUser />
                          </Card.Text>
                          <Card.Text className='text-danger'>
                            FREE
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      </div>
                      <div className=''>
                      <Button variant="warning ">Warning</Button>

                      <p className='py-4'>
                      Preview Course
                      </p>
                      </div>

                    </div>
                    <div className="col-md-3 ">
                      <div className='card-style position-relative'>
                      <Card className='position-relative'>
                        <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUVFRUVFRgYFRUVFxcVFxUWFxcVFxgYHSggGB0lGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0mHyUvLS0tLS8rLSstLS0tLS0tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABCEAACAQIDBQUDCQYGAgMAAAABAgMAEQQSIQUGMUFREyJhcYEykaEHFCNCUnKxwdEzYpKisuEWQ1OCwvAVJFRj8f/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EADERAAICAQMCBQEHBAMAAAAAAAABAhEDEiExBEETIlFh8DJScaHB0eHxFIGRsSNCYv/aAAwDAQACEQMRAD8Azc1ylZktSVeitwTtdFFrorjAVw0aimuOAKBrldrTg0XGtS+TTBLNDJmJ7j2t56/rWWIa1L5J5/2yE6FUf1uwP5VF1q/4yjp209i7wbIiX6t/PWpKKFQNFAphLj404tTSbb4Hsj315CaLXGciUMQLcBSO8mHjOHNgubSx58RUDNtaRuGlNZpXb2mJ9a1SpNUGsLtNvgaYb2iOlMHHf9acYI/SsKe4/AqAHHGiumUWNMRjZCAvaNlHAZjb3VHuasGA3bnnAcAKp4FjxHUAU+l3dwsGuJxIHhcLfyGrH0pkUIllhHuU8U8wuCkf2UY+mnvqz4SaA6YPAyTnk5Xs0/jk1+FSUey8dL7ckOGXpGvav5Fm7vqKPS2Jl1KXBTcbsqRFswtfhSKxlMK687GrntjdwRRdoJZZGBGYyNmuCbaaaa2qsTp9G48DSpWnTHwmpwshtwNsY2KRxBB24IBZSctrXscx066VdsXvBiJQElwrQebZhfwIFR/yVt9JKB9lP+VWzezVEQC5Z1Xx1OvwvVWSmebdSIvdp0w6MCO8zFiet/0qWixyE3vSzYCPKBlGgpj/AOMUnmKll7jlT3JTauIUYdmuLWFvO40pruvKrYc8PafN66/nUHvTsvsoC4Y6W0JvzApHcrGd118b+8f2o77sFQ8uzHW8seiP4W91Od0MRaR0+0oceY0P4/Cltsw5oT4a1A7FxOSWF/3+zbyfSlw2aYx7waNBkW4I6gj30XDyZlU9QD8NaPTbA6Kw+y7j0zFh8CKp7khHzCkMtLyamuhalopuhPLQpW1CtoyzzhPhDbgfOmDrarWEGtR2MwYOtetDL6mZOn7og6FKzYcr5UjVKd8EjTXIaga5Xa444a5XTXK0w6KuG40x7QAG2ZWX/l+VU+rBuniMsq6/WU+l7H4E1P1Mbxsf0zrIjROz6mjADpRZ8QiXzMBUfNt1BoiljyrxIwlLhHrSyRjyyUN+lc4mw41CYyfFkA9kyBuF1I/GibsJJ84uxJ0I1pjwtRbbFLOm6RKrgmSQueBpzibladbTS1qWeAdlfwpOq6bHXsSGy9gSywpnxUqRkXCRnKbeL8fSpfAbsYWE3WFS32n77X63anGwHvh4j+7b3Ej8qdyzqvtMB61dBJRR5ORtyYpTTG7UhhIEsqIW4BmAJ8hUZjd7MOjBA2diQABrqTYDT86xbevbZnxM0l7gyMF6ZFOVbeFgPfTIrVsgK9Tcds4lHw7ZWBvlt42YHS/HhVKxMfdf7prKMPipVa8LSK3/ANbMrfym9P8AD76Y6PQzZxwKyoknoSwzfGun0cpu0x+LqFjVNEtsjbUuFYvGdSLEcjVk3A3hkxGNcztc9n3ByHeF7D3VS03tjb9rgID1MLyYc+du+D7qs272+uzIjf5q8TWtmID/AM6ksf4aZkxSp+XcVqizWZpKYLNZqhMPvlg5vYxMYvwDOIz7pMpPup4j3731evL0PA15uSM090PhVch9+pf/AE39P6hVY+T6YFpB5VPb6HNgn8h+Iqr/ACeaSyX6Cm8wbNjtsaM0eZGHUVSZEK9ovMd4eYN6t2KxvZrmyki4GgvxNqg9pwZZ/Br/ABoVuDwWzB7VjeNZC1gwB101560SHEqWmCkG+VhbxUL/AMazba28UmFiSPIHXMy6mxFjwqz7i4wYiLtR3eK2vfUEjjTalVi3FLcsCR21NEpw9JWoHE1M5ahRrUK7SbZhsaA0WTDilo7A60ow1txqmy9LYhsRhajJ8Dfhxq0PFTU4e5pkMrQmeFSKm6FTYi1cqz4nZwYWPp4VDYjZsifVJHUfpVMMykR5OnlH7hka5R7VzLTbEUFFSewSDKoJsDp5XqMNOcC+Vxb0oMiuLQWN1JM13d3dlMU5mlY5WAIUG1ifaBPHQ3FXrZ2xIIf2cajxAF/U8TVI3L2oAjAnKLBx4BhqP4gT61I4je5Iie/m8q8pS7MoyRdj/f6TJBmGlmH51SdgyfTK3Un40tvFvEcWmS2VL38TaorBzhCDfgRWtWmbDai6bbIy+tImf6K3hTfaOJzJfyruHwTvFmUioUtj0dktxiu8s8EfZowAueN9OttaiZdoTTGxZ5Cfqi5+A0q27v7qrKSZxex0FzbzNuNXLB7HiiFlQAeAAqyHGyIM0oqbMqGBmghfFPHkWJWZcxAJex7MAffy1mw4W6Vs/wAtWOCYSKAW+lluR+7GL/1FKxjKeFXdOvK2yacrZJ4KEKud+B4Zhoba2GeNkY6faB0qNYKX7tyL/WFj43APnwNSeKgCxZbJn4m+VXA46Zwj304WfnaoyIcT4W9+n602PdmMkDsbuK9mYMMzdmsjGPXQPdbAcbEE8DTKPCKSbSKDyDaX/SneGchha4c2uRN2bsX1Hf4DivHhz52mu0lsVmaQhdbSYaPGRhW5maM5lucx06UDnKPz+TtJWk2dKzFURpCBchAXOW9r6DhcjXxpGKWWBjkaSJueVmjb1ykGprFYnDAgmKJ7m+fCyzQlbH7EyEKfC1I4/HLIAonxBQa5Z7PY/ulWOnoPKjjkb5RyjbpHcPvljU0M/aDgRKkctx4s6lvjUzsb5RpICf8A1IO9bN2d4r265xIPdaoltmtKAE+bSkqD9HKiyai9uzkKsWFtQB76Rx2yhH7cM8RH2lJX0a1racr0LeKWzRqb9TQ8F8q2HIyyRyJ/tDL/ABKxb+SpF97cHiWVknjB00ZxH7u1yE+6shj2cGAKyxk9CcvxbSiNs6UXOS4HEjUD1pb6fE+HQWqRt3zHDyljPGJI75lJ9m9tdeBqxbuxRiM9nCsSZiFCgDTrp415pjxLxHuM8bdUZkb3qQa3f5MdpSy4MGU5jpr1OoJ9QFY+LE86Xkw+GrsxPUWxxRa7IRSJkqdhoVtQogNCsOoxGYUIprDheg3Sk0Fqeej3HAcGig2NJsKTBrKOsfJY0qEFMUkI50Vpix8B8azSEpCsmxknvZQDbRhoSfLnVZ2hgHiYo6kHxFtOoq54PEhbVY8JjIZgFlVW+8oP48KKGaUH7CsuCM1a5MZIrsRsau2++7IgbtYkPYvqDb2TzUn4i9UsrrpV0MimrR5k8bgy1bNxTWBudQbi/EcfxHxpo5zMct214WN/I+NOt14g5S40Di48NSR7lNbRhNgQR+xGq+QGtQTnok0kVSpxTZlGy9gYuW1kyDq2nwq47D3DFw0zF/DgPXrV2TDAU4jpWqUudhbaXBUNubMjQ5QLCwo+zbLHYU63uFiD1BFM9kDNCx6GkThSYyORurZMbuPdnHgPzqeqtbtt9Kw6r+Bqyk21PAamn4foE5PqMM+WXaPaY4RA6Qxqvkz99vgUqnbPclwNLX1va1ud7gjh1FqNvDtD5xiZp/8AUldh92/d/lApXYyAEsSBobagG/UAyRk6X9lr68DXopaYClySm0doR9kQYgVY5R2chReFwbJJJGbELoFU6cqgQgIUCwzNzNrDgLngBx1qR2hjonFiWa4sGFnII4A9qmcX04SNpemTHK2uXuLYA668NBwJBYtY9DWQVIJ02L4WJZWIyxC4uAZexIsfZDP3CTccelSUWzOzVZEbG4a4DZ+zMkZut79pAwKjzB0plhMOjjXsW7yrlEhglbMw9nODHztfl4gU9n2V2CmSM4zDnKSDkDoxF7AYiBgPW2lDJ9r+fPY6X1N1+hF7Xx0klledZwLEOAb8xYs6K/ofCoxqlG23K1+1Ec1xa8saM2gA0kAEg0HJvHjrTXGzxv7EKxHnleRlOnSRmI18aZG1tXz8P9AsZineD2hLF+zlkQdFdgCOhANiPA01tQo2k+QR/jtqSTAdoUYg3zdnGrnS1i6qCR4GmqzEcCR60lRDXKKWyOsEzM5Ci5JOg/eNhoOpsPcK9I7l4IQ4OJQPaGbzAsiH1RFNefN2sMZMVGAL2OYfeHse98o9a9GSz9mqRoNERUHkoAH4VN1ckqiMxptDqYA0T5tfnTOLO5p2qlahuxvAsEtQpPtzQotSMpmJNRXoA0VzTj0TjNQWiXo6mtBOT6C3WiobUW9zf3UatODiSlYsQQaa1wGso1SLVsrFM5CiQi+lj3lPgV4Gqjvhsv5viWUKArAOAOAve+U9Lg0+w0pGoNjUljXOLVVm1ZQRHLbUX+o/2lNuPEVkHolfYHNDXEhd1sSqlgRxAPuvf3gkH06VvGDclFJ45Vv521rCdhYQCdRycFRpfVtLfGt3jWwA6ACl5q12iaaqCTFS1cWSkJGoiNS9W4qhrval4Q3Q/jpULuo2ZJV8b/D+1WHby5sM/gL+7WqvuVL9JIvVR+dbJWdElNiPbEDxBFP9+9o/N8BiJAbN2ZRfvSdxfi1Q0E4TFKL/AF7fjUV8uO0ssEGHB1kkLsP3Yxp/Mw91F0yvY7LzZjJp/OB2KW+0bnTQ24aSEagA6op04kUxFS+0FIhSwASw4o9ySb3RnSwFwb5XPHgOFenJ7oQiNw4uw8NT5DWpbd7BnESmLNkzBmLZVY90HugMyi2tzqNF9DEw8GPkvv8A7A1KbrgfOUYq7Kl2bIhcjQgGw5ZmXWhycMKLpktPsFlkZGgjnsBbs5OwNiQpf60YAa6knS56WqNxUMmHPaYcYuIBiGY2yhgRYCWLuv46DgKtG2NqrNwxAVbqtkkkWXMTlu7OgyBbD2FIIuCKWXtkyLFjFldkBCyxZbqNDldSs2W54ZTe3PWpvEaVy/P+DkknSKNLteR1yuI30IDNGmcXFv2gAY246k61HVa9t7KxhBRsPEQtiOzRO0RRbwExHXODx11qryRlTZgQehFj7jVGKUWvLX9jpJidco1qKaaAA0RjRiaSkNakYy6/JNgw+KDtYAMo18Lvp/uEXvrdjGo5Csy+R7ZyrCZmXy0vZmNz/IsJ9aveJlPtAG3WxtXndRK5tj4rZIkC4ApvLLUcMWa786vUzkMUR52lCmnbCuUNm0ZEWtSLnlXWNdVatLDq0WU8qUpEm9cjjtdvXBQatMAaLehXK44URqsG7WKUSZW9lgVPrzqt3pxh5bEHpQyjaCTLDuxgjh8auHkOYK2aNuotdT+HqCK1DNVJwQEoE31zHGq6ah0l6+If4VcEfQeVSTl5ifIuAzPQQ0mxrqUKYtoc4sZomXqp/Cs23IxhXF2bmrA+YIrR1BcFV1PPXh50z2dutHG2djdtfZFuPHU6n4U7d9gFSW5XnwJONMgOhdTbxFh+VUX5X9odrtAoDpBGkfkx77f1L7q3WKBIwSFC6XJ52HU8a8y7fxnbYiWY/wCZI7+jMSB7rVR00KlbF5JahDZ0GdwLE+AzE2Gp9kE8AeAPlTvaM7IGUdnZ9LowV+RIcIEzf70pGNVWMZ1fKx0K25a3BZSp1A4Mp06GmcjZiTct4niRwF9TytzqurdgcIORZFHW7fkPwNCKRlN1YqeoJB94o2IFmte+XT3Vad3tgrKitNFZApbOHS7lrFRcMAlhe4fW9hY3sMlNRVs6tyzYTCh8JEZ2Dkx3Z5DmPfvlAlmuARe/cU+zx0qJx27eGbJGqvmAGYDVyuUd7s2uxJOugUcbCw0sE05DC2txYNdx7OgAlYFm1PBFHA252z/b27uIEzkRZwzsQEOdtdf2ZJkHqKixtOVaqGy9aOYqyo6Ji5VyhrwTLLGdVIyhO8max6jjTLDbcnRQglLRj/LkCyx+QSQFQD4Co+YMGIe4bmGuG9QdaJVqgq9ROod47GCSx7KKMgWPZqUDeJW5APkBTImu0U0xKjGzhNECFiFHEkAeZ0FGNSe6+EMuKjUccwt94kKn87LRN6U2Clbo1nZWz58NhYXiQ5SM11GbunRCRx/ZrHUpgd9XGkiKbaaXDe61qu0EQRVRRYKAoHQAWHwpHE4CKT240bzUE++vPtdzpwk5OUWU/ae8cMhXLEeOpBAJv+PqK6k8bC6uR1DAaeo/SrE27eG5R5fIkfnRTu1hyLEMRx9rnQuMH2Ni8q7kJk/fj/j/ALUKmv8ADOH6P/G1Cg8KIzxMnsYe6Wri6UtnB40V0trTD1KCOdDSS9KUfhSCN9IR4VqMYYHW1GpGNu8x6C1KR61pwDXDRjRTXHHL0dDSdGFccXXc2e6sh+oyyD0Ov5VfAegv5Vme5WKCYhMwBDEKQeBvpWxyiwsOVTTx3IRnlpaI1MKx46fGofamJIbsoizPxIC3NvAD8TpVmLAcaiMftWOG5AFzx6npfrXVCBPU8myFNgM6A9oGFwMoYjMSL5rKLWFL4zePDxe25B6WNZpvBvI7Me9p05evWo+HefGBC4aXsw2Ut3sgbTu5uAOo0ok5vdIfHplFeZmo7e2h22AnfC3kZo2RQgLMC3dPdGtwDf0rz5icJLG2Uizc1YFW5j2JACePIGr1svfmSKUN3Tf2u6AWHQkDX1q+ttKHGxE5O4O8zFYpVUgXsyPrqdBl16EcabDI4coVlwtccGD7M2fJiJVgjhLSNrYDKQul2a+iqBzNhr5Vc9pfJ2sMYK4kPOLEpYCNj9hXNip/eOh6Ly0pMneWJOzd1BaQgAk8RmI4/hrUDJu7OQWeSPMWOgYsCv2uF+PK3rQz6qTfl2QWPBH/ALsxh42DEOCCGIbTUG9jcHmDernsrEyRxkQ9nPEha3feN4wTfKGlUxjQ8Qbm/EUjt7cfEGVngdZy7MSihldb+BuGHK9x5VX9pbNxmCYGWN4iRoysOHMCSMkX6i9VXHKlTX3CGnBtNMnNobQ+rl7FCx7SOeGQxszBmJaaJmd7l1NtBqptajRK4H0Ymyr/APGljx8APAnsXuyDzJ41XX2/M0bRtIcr2zGwufNhq3H616YoSCGU6jgQbEeR5V3g7U/nz3sxzLFDvSwZllijlQkh1yqmYg6MysrqD4BRSwl2bPxVsOxsPrKoOnNe0FuP1F48dKgMVtSaRQkkjOBwz2Zh5Oe8BrwvTPNRLCu233AuRaTumJNcNiY5RfgdCLkgX7MuRw+sFqGxWxMQlyYmYDiyWlUeBaMkL5G1R4axB5jgeY8qcSbSmYqTNISgIQl2LKDa4DXuB3Rpw0olGa7mNoZmtA+RrZ3aYsORol29FF/62hPpWfvW1fI7hxDhXnYe0VUW4kt3zbzUw/w12eWmB0FbNPrtQ77QkYgLZb+vxOnwoSdseEjedlA+Aryn1UO1so8GXfYmKFRjNIAArEnmTb9KKm0mU2cAjqND/et/qYd9jvCk+CVoURJQRcEUKeKPO0lxXVm9R0oxk6603dRyNjRnp2Lsbi4plM9pI25Hunz6UftGXW36Gkp7EG2t7G3AhhzFFFASdoPFqp6s5HoKcgWHnTTZ0mYqDoe8SPEmn7C/4CslszYbqxMCiGlHGlJ1gQWhXedSGG2eWHe0HLrWSklyclYNjN3geYIPxrVMXvQqi17sAL+dqz/DYRU4D9aW3gX2JRwYZT95f1FvdU0papUgnji61FhxO8xbgahMVtPMbmoRX8aSlxA5msWILyx4JieHCSi8gIIvfI+VjcdCLG35UbYowmHLBppZYXUq0MijKb8CxXiRxBABvY0TYm77z2eRhDEeBIu7fdTp4n0Brm2NhQxezibgXLZh2bBeRGjCQ8svcvfjypkU1tYieSFi26O6EWImmLfSYSO2QnMrlyb5MwIYFQBc8CGXgTpoGCwEMCFIoxGl8xFybnqSxJPvpvuwirhMOqggGJGNwASWUMSwBIuSbnU+dP50uKDJNvYTdshcVtNGcqAco4t18hUW+0rT9qTdQMoXlbhXdqnIpPBmJsPDqTVcDG+mtqSlZZGKosW094AiERKIkOpYaE+fOm27wM5aSWNTEUIU4juoxzKbqWUkaX71reNM8Liiou6KxBuuYA2PXwNR+194GLAFySdNOA5U2Cd7ICcVVE7tXcbCSjOYJIb94PH9LG1xcMWQt3bdSoqp4z5NZCM2GnSZfMAn45R/EalNm7XkBaSNgMpBbI8qyZtCGK2AYm47uTKbrx1p9/iv62IRGa2hmT5tKV5FZ4mNzoQVHPmtrGyMpx4Z5rSM32lsLFYf9rC4HWxKnyPP0pgkyC4dCTbSxy2PUi2o8NK2qHbkRW/ayQg20dRi4cpW4+kiswJ1FnJbnYgglLFbBw+JUMcNFKGGYSYWRWOU8HKd1iT4I1NWf7S/wDpMcRFYEiRVIv3WDai3JgCL+BtRRC+UsEJUGxYAkA+J5cavW0fk9RldsK8rMov2TRt2l+QNwCpP7wUeNUvG7NlgOV1eNjpllVoWNuNs3dI8mNOjOMuGA1Q2ijLsqLxYhR5k2H416I2ZhuwwGHKjQnPYjirqxQHpZcg9Kw/dDZryYuJSCLkWNri5IRWB4GzOpr0jtTDgwlQPZy2Hlpb3VP1TvYPHsVn/ABJBezh1PlmHw/SncW3YDwl/lcfitUrGJ3yPGnGHhrzHghyizUW19rx/6hPkG/SmGK2+ALRxknq2g9w4+8VHpHSXZXasWGHc3US+A3iw6oBLKTJdi3d5libel7elClNn7LwxiQupLFFLakakXNCq1ZK5QsyQmk2o7URqaj0Al6SlANKmiMKJAsYm6sGB4VO4aUOARUHOtLbBxnZSi/stofyNHONxtC4S0yrsTa4dm4KTTiLZB4sbeFT8bAiuSV57zPsV6UR8OCVToKcBaMTXCaBtvkKjt6Wlw5ngkhBs5GaM9HXgPXUetNyaPhpSrAjlWcboxq1RUV2FjSeEg8LW/wDyn+E3Sxh4I3mxAq8Y/e/5sydpZkkF1zC1ipAdQ45i97NxvpVn2dtfDygFSOuhzD4aj3VX4smr/Igkqf7lT2Hu1iEUK7ge81NYPcyLNmkBkJN+9w9w/OrVAqnVSD5UdzbQUNdxTm+wxweDC30AAuqgcAo0HwtXZVHgKWxD2FQO1cdlB1pM2o7DYRcmQ28mzzmzZwR06VWZ3C6DjR8RtB+0bU2OhHKoz/yUQmVZc7AnviMAtbpqdL10INljlpW4ltTEkIwEmRzbKSrEHXUBgLKQNdf71VgZYckrZggaytfOgKt3lvfje/duDrWxSYLB45dMFluMuYAR8BYZiNGI5BgbdKTwW6eLwo+gxPboNBBiACoU3v3gAW8FGRetWYskYqqPPyuUpWylYeRpYw8uSVVyjs0urAL9UqwAZjqCTnYE5iG1paXEji7tEgBdEmjzknitibu1+GYZQMp1uLGyPsRmZRiR2J7ozqQgZdRlSFbxggADRr68LWuf/BrsuaGSLEobhTcRlWBIN1YNwN7kMDx0rtSAKrHIrkSAGJFNrxSoFDHXOUAsb29kX5iwuDXcJFiJJj2bCZ/bCdm6O4XvCSQiRZLm4sxLXv0FqvOE3GghQSYubKALMqP2MdtMqtJYSPbX6w8uqW0t/wDB4ZCuFjVtTc27GPNzY6Z3Pkut+Nbq9DCR3ZwO0u6+JnCi5LQsFnZgbHWQWEZvfRbi3XkTePe7BwqUI+csxKiKNRKC3DKSe7ztbU+FZbvBv3iMUGRnujaFQMkdvug3bzYnyqd+SjaSnECIIqv2cpDZVzHQdxW4gcWyiw7prpYmlqaB1Lgse7W6vzfFPjDHHEW70cCG6xm1gCRYWFyco+sR7OUCreS8ntMfLgPS1cVKkcLCbX5e6kNub3GbIomI2Z3215mlY8GR0qf2lh7SN460ykFqWxidjHLaidmbMw4qCw8wNPjXcTMBUnu1ZmudQAT+lYuTXsrBFgcUwDOcMrEXI7FSQfE9aFTzYo8kcjxjv8aFOr3Ef2MBZRSbL40o1JtTj0AhBopU9aPQrTBvMlM5Vp+41prKtHFi5otO7e0c6ZWPeXQ+PQ1MlqpOymKsCKtMOIuKizY6laKcUrjuOGNJ3oF6IDSkhgcmgrUUmuLxraOF8fgPneHeD/MHfiv9tfq/7hceorPsKcTC4EfaI99FAN7/AHOZ9K0CCYqwI5VoO64gKtIkarISS55kniRfhfmBTsObRcXwRdVibamiD3HwG0mUPjG7JRYqo/bNbk3HIDzF78rCru7gUnJOBUdisYBQTyITGLkc2pirDjVG2vjySRepbau0L86oe3dqiO553sPGl44vJIsiljjbFp87sIoheV/5R9o/lV43Y3HigUM4DudTfUX/AOVUPc3euLDOTJF2pY3Lhssg8MraEe6tX2TvdgZgLYlEP2ZCIm9zaH0JqmUJR2JsmRy3RKQ4W2gHDh0HlTlYajNob1YOFSxnRrcFjIkYnoMpt7zWeby/Ko5usH0Q66PKf+Kf91rYwb2Qmm92aZtXaMGHS88iKpHBtS3knFvdVA3h+VFUGXDRhBwDyAE2/djH4m/lWU7Q27LKxYsbnixJZz5saYJEznmT1/U1THp+8gXKK43JnbO802IbM7s55Fze33VGi+nuqHAZz18TU5gN3GOsndHHW4qV2dsxWcRqLAanrR+JCH0mOMpckFhNikqWbQAaX0ueljrUjs5DEVdCVaNswce0G8D/AN41I7ZTvCJdOQ8+FJbQiCJ2Q1bKTpr/AN50tzcuQvDS39C4bE+UmNiExSFT/qILqfFk4j091X/Ze3YJxeOWN/usLjzB1HurBdjbNDB2OYuuiKup1VrlgLnTS3DX1qOm2fiQb9jKLcDlbT1tQPFG9nQpTl3R6G2xG7ax2v8AvXsR5jh8aq+MGLHGFT9yS/8AUBWU4XefGQ6LPJpoQZGNvC16fr8oONH+c/8AEn5xmgfTTfFDY5YrktuI+cH/ACSPMr+RqY3UWaOZZJBpa1tQqg8Tc2ufGs4k3+xh/wA1/wCIf8UWonG7w4mX25nI6ZnP9RNcumn7Gyzwo9CybzxAkGSIW5FmJ/poV5oLUKZ/TP7X4CfFj6fj+xZmohozUWhPUC0K7XCK44JbU+VIutLDn6UVhRAtC2FTnVi+a2hWUXuWZSPAKGzfGonZcOZW8Cvu1/Srbs+8SYYsLEziQD9wlUB9crUjI9wm9MLIaOW9HJqW3x3fOFk7SMfQue7+4x+ofDp7uWsEr0pobGakrFwaMDSSmlL0IR0mpTYm1DEwN9KiqBFY1ZzLjj9uXGhqDxO2SedQ7yGm7GsWP1BpLgcY/H90kmqljYUnIYTKGtoG0Ho3Cr7gNxpMbhmczdjnI7K6Z8yjiWGYEA6WIPInUEVUts/J3tDDXIh7ZBfvQkvp4pYPfyUjxq7poxXemed1c5T2iyvYrZcsftIbdR3h7xSUOLdCCDw4X1/GjwY6WIlVZlIOq8LHoVPD3VIptGGT9sig/aAIPrarG5LlWRKWSPv93z8xhitqSye059AB+FN4cOzeyKt2yti4VyCe0Kk8YwsvpluCPifCr5svdrBmww8qsw4qTaT1U2YeVqU80Y7RQxTU+Xv+Jl0WwTGnayqcgIBF7G54X0NvWrTsDYryIrwpEAb8XS6AG12DEvc8RlyjUam9hoLJh4FMZOZiLGNFux6i39qhNztkMVaAHspIGKGwvK0RZnhd7nJbIQL2PeRhbSpp5pSWxRGKXI1bZDqMpSRhbusULJw19ouOttTyPhUDPg8UpIEfaLfgsBQgn96EK3retJ2lhpMPY9s7cgMsZ5a6Iqmw68KYYjbGLQlWC6C7ZgQFXjmYliEHibCgi5LsY2n3M+XZuOaZY4o5FYxmQpIjMUAbLmGZcxU6AXub3150+2Fu9i5JJlmVXmiMJ7OSwQpIshuy6XvlsLjiD51L4LarvJNjDCGV1jiiswT6OMuTIFHeAd3Yi4BKqpIpniNtMJfnSxOpCdm65Hk7SPNcWuoGdCSwF9QXHEij1Se1fPmxtKuST/wliiWIZFzjKQ8mgW5JsIwQAbKbDha1RsfyWwoM02LseQjCpb/e9/6aerttpFzxxrIl7Ehb2v8Aa7N/SugL2UrvhFs2S4vMhYXNjd3sttfD4UOqaXoDpg3ZA75bJwaYXJDN2ssbRnM83aOqtIkRXQaJeQEgc1GmtUGWAg2ve3P9PCtQXZ2EkZYlkOHuA75isq5lN44lZbAi5zlsxF0QC/eAV2puW6KXR45VAJOUkNa1ybHQ+hJpuPNoVNg5IXuZQIjTvCbLd9dFUcWbRR+vpUtjcbBCbKO1b+Uef/T6VCY7GyTe2dOSjQeGnOqVKUvYkty+jj1f5Ie2wS6GSRiOJUAKfLun8TQpsmxpiAclvMqD7idKFd5ftHeD/wCmTbUU0KFSnuHL100KFccJrxPkPxrrChQrTCW3Zxixy2f2WFjpe2t72q572G6wzJ7AWNL8O8rE8DrwNChSci8yByK4F9xeGSWMxyLmRxYg/wDdD41jm3cAcLiHhJuAbqeqnVSfG3HxFChQIVgbuhCOS9Ko1doVjRamKCuFq5QoQhJ3qwbo7t/OT20v7BWIC31kYHUHooPHr8aFCjRPnk1HYv20tow4aPPK2RAOOVja3Kygmqdj/lWwcf7NJZehChF97G/8tChT8ONT5IJOkUveb5Q48WLPs7DNyDSZ3ceTrkZfQ1Q5SCSQMo5AEkDwBYk+8k1yhV8IKPApuzsMrIbqxU9QbVLRbxy2AkAkAtYnRhboRQoVsoKXKMatUyz7G36mUhEmdh9iUFx5ZuPuIqawe3o+3Ms3aRvlKhkOZVBN7FQQSt7aHNQoVJlxpOkJyN446ov9C44TEdpHmTEF1OhJijUHwI7K/wAaTncOfpbuFIPeZmW41zBSbAg8CADQoVL3ophNygpEXLMJZAFOnEmx/PWm+2IEWxAQW8CG4ciFt0oUKbVOjrtNi+K7NEWzO2ZRq4WS1+mcWHu9a7hYo3yyrmzICLLbKTlP1GsL+RAoUKF8G2ypbb2jFCzNdnJJIGWwPW4Ol/HT1qsbR3inlXJnZIz9RWIXyNuI8OHhQoVVjhGrJcDc4qcuQbt7uyYuWJQRHHLKYhIbNZlXOwCg3Jt1sNeNbvu5uHgsGBliEkltZZbO5625IPBQPWu0KTlm3JoqRne/uKCY+ZQoABQcB/pJQoUKFJUYf//Z" />
                        <Card.Body>
                        <Card.Text className='text-start'>
                        Updated 21/12/19
                          </Card.Text>
                          <Card.Title className='text-start'>Fashion Photography From Professional</Card.Title>
                          <Card.Text className='text-start'>
                            All
                          </Card.Text>
                        </Card.Body>
                      
                        <Card.Body className='d-flex justify-content-between'>
                        <Card.Text >
                        <FaUser />
                          </Card.Text>
                          <Card.Text className='text-danger'>
                            FREE
                          </Card.Text>
                        </Card.Body>
                      </Card>

                      </div>
                      <div className=''>
                      <Button variant="warning ">Warning</Button>

                      <p className='py-4'>
                      Preview Course
                      </p>
                      </div>

                    </div>
                    

                   
                  </div>

                </div>


              </div>
            </div>
          </div>














          <div className="row">
            <div className="col-md-1 mx-auto py-5">
              <Button variant="border border-primary">View All Courses</Button>


            </div>
          </div>

        </div>


        <div className="row py-5">
          <div className="col-md-12">
            <h1 className='text-center pt-5'>
              Teachers
            </h1>
            <p className='text-center py-2'>
              Cum doctus civibus efficiantur in imperdiet deterruisset.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col py-3">
              <Card className='border p-5 border-gray border-0'>
                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                <Card.Body>
                  <Card.Text className='pt-3'>
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />
                  </Card.Text>
                  <Card.Text>
                    Member Name
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col py-3">
              <Card className='border p-5 border-gray border-0'>
                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                <Card.Body>
                  <Card.Text className='pt-3'>
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />
                  </Card.Text>
                  <Card.Text>
                    Member Name
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col py-3">
              <Card className='border p-5 border-gray border-0'>
                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                <Card.Body>
                  <Card.Text className='pt-3'>
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />
                  </Card.Text>
                  <Card.Text>
                    Member Name
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col py-3">
              <Card className='border p-5 border-gray border-0'>
                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                <Card.Body>
                  <Card.Text className='pt-3'>
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />
                  </Card.Text>
                  <Card.Text>
                    Member Name
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col py-3">
              <Card className='border p-5 border-gray border-0'>
                <Card.Img variant="top" src="http://localhost:3000/static/media/f3%20(1).2080fbebda0102bda702.png" />
                <Card.Body>
                  <Card.Text className='pt-3'>
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />&nbsp;
                    <FaStar className='text-warning' />
                  </Card.Text>
                  <Card.Text>
                    Member Name
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid reg-bg-color">

        {/* <div className="container"> */}
        <div className="row ">
          <div className="col-md-6 reg-bg-img">
            <div className='p-5 text-white'>
              <p>

                Get 100 Online Courses for Free
              </p>
              <h1>
                REGISTER TO GET IT
              </h1>

              <div className="row my-5">
                <div className="col-md-3 py-5">
                  <div className='border border-2 border-white text-white text-center rounded'>
                    <div className='fs-1'>
                      52
                    </div>
                    <div className='fs-2 fw-normal py-2'>
                      Days
                    </div>
                  </div>

                </div>
                <div className="col-md-3 py-5">
                  <div className='border border-2 border-white text-white text-center rounded'>
                    <div className='fs-1'>
                      52
                    </div>
                    <div className='fs-2 fw-normal py-2'>
                      Hours
                    </div>
                  </div>

                </div>
                <div className="col-md-3 py-5">
                  <div className='border border-2 border-white text-white text-center rounded'>
                    <div className='fs-1'>
                      52
                    </div>
                    <div className='fs-2 fw-normal py-2'>
                      Minutes
                    </div>
                  </div>

                </div>
                <div className="col-md-3 py-5">
                  <div className='border border-2 border-white text-white text-center rounded'>
                    <div className='fs-1'>
                      52
                    </div>
                    <div className='fs-2 fw-normal py-2'>
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className='p-5 text-white'>
              <p>

                SIGNUP TO NEWSLETTER TO GET IT
              </p>
              <h1>
                THE COMPLETE WEB DEVELOPER COURSE
              </h1>

              <div className="row my-5">
                <form  className=''>
                  <div className="form-place">

                    <input type="text" className='border border-4 w-100 bg-transparent border-wgite border-top-0 border-start-0 border-end-0 placeholder py-3 text-white' placeholder='Your Name' required/>
                  </div>
                  <div className="form-place">

                    <input type="email" className='border border-4 w-100 bg-transparent border-wgite border-top-0 border-start-0 border-end-0 placeholder py-3 text-white' placeholder='Your Email' required/>
                  </div>
                  <button type="submit" class="btn btn-outline-light rounded-pill px-5 border border-3 my-5 py-2" >Get It Now</button>

                </form>
              </div>
            </div>

          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  )
}
