import React, { Component } from "react"
import styled from "styled-components"
/**
 * CALENDAR
 */
function formatDate(date, locale = "us") {
	const yyyy = date.getFullYear()
	const m = date.getMonth() + 1
	const mm = m < 10 ? "0" + m : m
	const d = date.getDate()
	const dd = d < 10 ? "0" + d : d
	switch (locale) {
		case "de":
			return `${dd}.${mm}.${yyyy}`
		case "us":
			return `${mm}-${dd}-${yyyy}`
		default:
			return date
	}
}
function dateFromString(date, locale = "us") {
	switch (locale) {
		case "de": {
			const parts = date.split(".")
			return new Date(parts[2], parts[1] - 1, parts[0])
		}
		case "us": {
			const parts = date.split("-")
			return new Date(parts[0], parts[1] - 1, parts[2])
		}
		default:
			return new Date(date)
	}
}
function datesEqual(date1, date2) {
	const date1WithoutTime = new Date(date1.setHours(0, 0, 0, 0))
	const date2WithoutTime = new Date(date2.setHours(0, 0, 0, 0))
	return date1WithoutTime.getTime() === date2WithoutTime.getTime()
}
const CalendarWrapper = styled.div`
	display: inline-block;
	margin: 1rem 0;
	padding: 1rem;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	user-select: none;
	text-align: left;
`
const Controls = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
`
const Button = styled.button`
	background-color: transparent;
	padding: 0.5rem 0.75rem;
	border: 1px solid #ddd;
	border-radius: 0.25rem;
	outline: 0;
	cursor: pointer;
	&:hover {
		background-color: #ddd;
	}
`
const Input = styled.input`
	font-size: 1rem;
	padding: 0.5rem 0.75rem;
	border: 1px solid #ddd;
	border-radius: 0.25rem;
	outline: 0;
	margin: 0 0.5rem;
`
const SelectedDate = styled.div`
	margin: 0 0.75rem;
`
const SelectTodayButton = styled(Button)`
	margin-left: auto;
	color: #fff;
	background-color: rgba(204, 34, 34, 0.75);
	&:hover {
		background-color: rgba(204, 34, 34, 1);
	}
`
const Days = styled.div`
	width: 100%;
	display: inline-grid;
	grid-template-columns: repeat(7, 1fr);
	margin-top: 1rem;
`
const Weekday = styled.div`
	height: 2rem;
	background-color: rgba(0, 0, 0, 0.15);
	opacity: 0.75;
	display: flex;
	justify-content: center;
	align-items: center;
	${p => p.weekend && `color: rgba(0,0,0, 0.35);`}
`
const Day = styled.div`
	position: relative;
	width: 2.5rem;
	height: 2.5rem;
	margin: 0.25rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0.25rem;
	cursor: pointer;
	border: 1px solid
		${p => (p.today && "#c22") || (p.selected && "#ccc") || "transparent"};
	${p => p.columnStart && `grid-column-start: ${p.columnStart};`}
	${p => p.weekend && `color: rgba(0,0,0, 0.35);`}
  &:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`
const AddDateForm = styled.form`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-top: 1rem;
	margin-top: 1rem;
`
class EventCalendar extends Component {
	state = {
		today: new Date(),
		date: null
	}
	componentWillMount() {
		this.setState(state => ({
			date: new Date(state.today.getTime())
		}))
	}
	weekdays = ["Mon", "Tue", "Wed", "Thur", "Fr", "Sa", "Su"]
	/**
	 * SETTER
	 */
	previousMonth = () => {
		this.setState(state => ({
			date: new Date(state.date.setMonth(state.date.getMonth() - 1))
		}))
	}
	nextMonth = () => {
		this.setState(state => ({
			date: new Date(state.date.setMonth(state.date.getMonth() + 1))
		}))
	}
	selectToday = () => {
		this.setState(state => ({
			date: new Date(state.today.getTime())
		}))
	}
	selectDate = date => {
		this.setState(state => ({
			date: new Date(state.date.setDate(date))
		}))
	}
	renderWeekdays = () =>
		this.weekdays.map((weekday, i) => (
			<Weekday key={i} weekend={i === 5 || i === 6}>
				{weekday}
			</Weekday>
		))
	renderDays = () => {
		const date = this.state.date
		const currentYear = date.getFullYear()
		const currentMonth = date.getMonth()
		const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
		const days = []
		for (let day = 1; day <= daysInMonth; day++) {
			const currentDate = new Date(currentYear, currentMonth, day)
			days.push(
				<Day
					key={day}
					data-date={formatDate(currentDate)}
					onClick={() => this.selectDate(day)}
					columnStart={day === 1 && (currentDate.getDay() || 7)}
					selected={day === this.state.date.getDate()}
					today={datesEqual(currentDate, this.state.today)}
					weekend={currentDate.getDay() === 0 || currentDate.getDay() === 6}
					title={""}
				>
					{currentDate.getDate()}
				</Day>
			)
		}
		return days
	}
	render() {
		return (
			<CalendarWrapper>
				<Controls>
					<Button onClick={this.previousMonth}>Prev Month</Button>
					<SelectedDate>{formatDate(this.state.date)}</SelectedDate>
					<Button onClick={this.nextMonth}>Next Month</Button>
					<SelectTodayButton onClick={this.selectToday}>
						Today
					</SelectTodayButton>
				</Controls>
				<Days>
					{this.renderWeekdays()}
					{this.renderDays()}
				</Days>
			</CalendarWrapper>
		)
	}
}
export default EventCalendar