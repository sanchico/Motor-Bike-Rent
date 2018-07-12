package com.proyecto.angularjs.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;


@Data
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name="MOTORBIKE")
public class MotorBike implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8777352052678301854L;

	private @Id @GeneratedValue Long id;

	private String model;
	
	private String number;
	
	private Double latitude;
	
	private Double longitude;
	
	private Boolean reserved;

	protected MotorBike() {
		
	}
	public MotorBike(String model, String number, Double latitude, Double longitude, Boolean reserved) {
		super();
		this.model = model;
		this.number = number;
		this.latitude = latitude;
		this.longitude = longitude;
		this.reserved = reserved;
	}
	
	/**
	 * 
	 * @return the model
	 */
	public String getModel() {
		return model;
	}
	
	/**
	 * 
	 * @param model the model to set
	 */
	public void setModel(String model) {
		this.model = model;
	} 
	/**
	 * 
	 * @return the number
	 */
	public String getNumber() {
		return number;
	}
	/**
	 * 
	 * @param number the number to set
	 */
	public void setNumber(String number) {
		this.number = number;
	}
	/**
	 * 
	 * @return the latitude
	 */
	public Double getLatitude() {
		return latitude;
	}
	/**
	 * 
	 * @param latitude the latitude to set
	 */
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	/**
	 * 
	 * @return the longitude
	 */
	public Double getLongitude() {
		return longitude;
	}
	/**
	 * 
	 * @param longitude the longitude to set
	 */
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	/**
	 * 
	 * @return the reserved
	 */
	public Boolean getReserved() {
		return reserved;
	}
	/**
	 * 
	 * @param reserved the reserved to set
	 */
	public void setReserved(Boolean reserved) {
		this.reserved = reserved;
	}
	/**
	 * 
	 * @return the id
	 */
	public Long getId() {
		return id;
	}











}