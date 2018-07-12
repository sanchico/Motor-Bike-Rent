package com.proyecto.angularjs.models;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Table
@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})

public class Booking implements Serializable {

	
	private static final long serialVersionUID = -2944830735091525349L;
	
	
	private @Id @GeneratedValue Long id;
	
	private User user;
	
	private MotorBike motorBike;
	
	private Date pickupDate;
	
	private Date dropoffDate;
	
	private Integer reservationDuration;
	
	protected Booking() {
		
	}

	public Booking(User user, MotorBike motorBike, Date pickupDate, Date dropoffDate, Integer reservationDuration) {
		super();
		this.user = user;
		this.motorBike = motorBike;
		this.pickupDate = pickupDate;
		this.dropoffDate = dropoffDate;
		this.reservationDuration = reservationDuration;
	}
	/**
	 * 
	 * @return the user
 	 */
	public User getUser() {
		return user;
	}

	/**
	 * 
	 * @return the motorBike
	 */

	public MotorBike getMotorBike() {
		return motorBike;
	}

	/**
	 * 
	 * @return the pickupDate
	 */

	public Date getPickupDate() {
		return pickupDate;
	}
	/**
	 * 
	 * @param pickupDate the pickupDate to set
	 */

	public void setPickupDate(Date pickupDate) {
		this.pickupDate = pickupDate;
	}
	/**
	 * 
	 * @return the dropoffDate
	 */

	public Date getDropoffDate() {
		return dropoffDate;
	}
	/**
	 * 
	 * @param dropoffDate the dropoffDate to set
	 */

	public void setDropoffDate(Date dropoffDate) {
		this.dropoffDate = dropoffDate;
	}
	/**
	 * 
	 * @return the reservationDuration
	 */

	public Integer getReservationDuration() {
		return reservationDuration;
	}
	/**
	 * 
	 * @param reservationDuration the reservationDuration to set
	 */

	public void setReservationDuration(Integer reservationDuration) {
		this.reservationDuration = reservationDuration;
	}
	/**
	 * 
	 * @return the id
	 */

	public Long getId() {
		return id;
	}
	
	
	

}
