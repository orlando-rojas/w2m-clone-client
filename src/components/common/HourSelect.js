import { Form } from "react-bootstrap";

export default function HourSelect({ reference, name }) {
  return (
    <Form.Control as="select" ref={reference} name={name}>
      <option value={0}>midnight</option>
      <option value={1}>1 am</option>
      <option value={2}>2 am</option>
      <option value={3}>3 am</option>
      <option value={4}>4 am</option>
      <option value={5}>5 am</option>
      <option value={6}>6 am</option>
      <option value={7}>7 am</option>
      <option value={8}>8 am</option>
      <option value={9}>9 am</option>
      <option value={10}>10 am</option>
      <option value={11}>11 am</option>
      <option value={12}>noon</option>
      <option value={13}>1 pm</option>
      <option value={14}>2 pm</option>
      <option value={15}>3 pm</option>
      <option value={16}>4 pm</option>
      <option value={17}>5 pm</option>
      <option value={18}>6 pm</option>
      <option value={19}>7 pm</option>
      <option value={20}>8 pm</option>
      <option value={21}>9 pm</option>
      <option value={22}>10 pm</option>
      <option value={23}>11 pm</option>
      <option value={0}>midnight</option>
    </Form.Control>
  );
}
