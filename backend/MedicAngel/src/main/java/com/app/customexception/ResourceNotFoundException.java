package com.app.customexception;

public class ResourceNotFoundException extends Exception{
	
	public ResourceNotFoundException(String mesg) {
		super(mesg);
	}

}
