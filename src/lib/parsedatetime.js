export default function parseDateTime(input) {
  let dateTime = input.split('T');
  let date = dateTime[0].split('-');
  let time = dateTime[1].split('.')[0].split(':');
  let ampm = "am";
  if(time[0] > 12) {
    time[0] -= 12;
    ampm = "pm";
  }
  return `${date[1]}/${date[2]}/${date[0]} @ ${time[0]}:${time[1]}:${time[2]} ${ampm}`
}