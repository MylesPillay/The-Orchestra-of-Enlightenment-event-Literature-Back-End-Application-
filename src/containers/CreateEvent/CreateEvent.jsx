import React, { useState, useEffect } from "react";
import "./CreateEvent.scss";
import EventFlow from "../../components/EventFlow/EventFlow";
import ScheduleForm from "../../components/EventFlow/ScheduleForm/ScheduleForm";
import ThemePicker from "../../components/ThemePicker/ThemePicker";
import PageOne from '../../components/EventInfoForm/PageOne/PageOne';
import PageTwo from '../../components/EventInfoForm/PageTwo/PageTwo';
import Review from '../../components/Review/Review';

const CreateEvent = () => {
    const [event, setEvent] = useState({
        intro: [],
        // Note: How is this used?
        featuredEvent: true
    });

    // let event = {
    //         name: "",
    //         series: "",
    //         time: "",
    //         date: "",
    //         location: "",
    //         imageSrc: "",
    //         imageAlt: "",
    //         featuredEvent: true,
    //         intro: {
    //             heading:
    //                 "",
    //             content:
    //                 "",
    //             quote: "",
    //             quoteCaption: null,
    //         },
    //         schedule: [],
    //         orchestra: [{}],
    //         theme: {
    //             templateTheme: "", // Modern or Classic. Modern uses a sans-serif font. (Poppins and PT Sans) Classic uses a serif (Playfair Display and Lato).
    //             primaryColor: "", // Represents the banner color on the website. Usually takes the dominant color present in the image poster.
    //             accentColor: "", // Accent Colour is used to style the call-to-action buttons.

    //         },
    //     };


    const handleStepZero = (data) => {
        // Merge form data with event object
        setEvent({
            name: data.name,
            series: data.series,
            time: data.time,
            date: data.date,
            location: data.location,
            imageSrc: data.imageSrc,
            intro: event.intro || [],
            schedule: event.schedule || [],
            theme: event.theme || {}
        })        
        incrementStep();
    }

    const handleStepOne = (data) => {
        setEvent({
            ...event,
            intro: data.intro,
        })
        incrementStep();
    }

    const handleStepTwo = (data) => {
        setEvent({
            ...event,
            schedule: data.schedule
        })
        incrementStep();
    }

    const handleStepThree = (data) => {
        setEvent({
            ...event,
            theme: {
                templateTheme: data.templateTheme,
                primaryColor: data.primaryColor,
                accentColor: data.accentColor,
                subtitleColor: data.subtitleColor
            }
        })
        incrementStep();
    }
    const [step, setStep] = useState(0);

    const incrementStep = () => {
        setStep(step + 1);
    }

    const decrementStep = () => {
        setStep(step - 1);
    }

    const setReviewStep = (step) => {
        setStep(step);
    }

    const handleFinalSubmit = () => {
        // Note: Is this property needed?
        event.featuredEvent = true;
        const fetchOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
          }

        fetch("http://localhost:8080/events/add", fetchOptions)
            .then(res => res.json())
            .then(res => {
                alert("SUCCESSFUL CREATE");
            })
    }
   
    useEffect(() => {
        console.log("There was an event change");
        console.log(event);
    }, [event])

    return (
        
        <div className="create-event">
            <EventFlow step={step}/>
            {
                step === 0 ? <PageOne data={event} handleSubmit={handleStepZero} /> : null
            }
            {
                step === 1 ? <PageTwo formData={event} handleSubmit={handleStepOne}
                handleSubmitBack={step => decrementStep(step)} /> : null
            }
            {
                step === 2 ? <ScheduleForm handleNext={handleStepTwo} 
                handleBack={step => decrementStep(step)} data={event} />: null

            }
            {
                step === 3 ? <ThemePicker handleSubmit={handleStepThree} handleSubmitBack={step => decrementStep(step)} data={event}/> : null
            }
            {
                step === 4 ? <Review event={event} setReviewStep={setReviewStep} /> : null
            }
        </div>
           )
    }
export default CreateEvent;
