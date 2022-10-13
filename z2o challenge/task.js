//Create a program that repeatedly calls a specified HTTP endpoints

const { text } = require("stream/consumers");

/**
 * 1. Start processing
 *    Sending a POST HTTP request to /challenges
 * 
 * 2. Execute the call
 *    Send a PUT HTTP request to / challenges at 
 *    scheduled call time (activates_at).
 *    It is neccessary to add challenge ID(id) to X-Challenge-Id header.
 * 
 *    //If the request succeeds, a response including the next scheduled call time will be returned, and this will be repeated until the end of the challenge.
 * 
 * 3. Termination of processing
 *    The challenge ends when the total difference between 
 *    the scheduled call time and the time the process was 
 *    actually accepted exceeds 500 ms. 
 * 
 * 4. When the challenge ends , a response containing the 
 *    challenge result is returned.
 * 
 * 
 * API endpoint
 *  The API server used by challenges is http://challenge.z2o.cloud/ .
 * 
 * 
 * POST/challenge
 *  Create a challenge. Send an initial request to this endpoint to initiate the challenge.
 * 
 * parameter
 * kinds, key, overview
 * 
 * response 
 * challenge
 * 
 */

//Make an HTTP POST request

const axios = request("axios");

axios.post("http://challenge.z2o.cloud/?nickname=muhammad").then(response=>
{
    console.log(response.data);
}).then((text) => console.log(text)).catch((error)=> console.log(error.message))

