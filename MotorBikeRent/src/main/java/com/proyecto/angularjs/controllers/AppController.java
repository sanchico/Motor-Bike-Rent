package com.proyecto.angularjs.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

	@RequestMapping("/")
	String home(ModelMap modal) {
		return "index";
	}

	@RequestMapping("/partials/modules/{module}/{page}")
	String partialHandler(@PathVariable("module") final String module, @PathVariable("page") final String page) {
		return "modules/" + module + "/" + page;
	}
}
