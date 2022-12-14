package com.proyecto.integrador;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.PostConstruct;
import java.util.TimeZone;


@SpringBootApplication
public class IntegradorApplication {

	public static void main(String[] args) {
		SpringApplication.run(IntegradorApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOriginPatterns("")
						.exposedHeaders("")
						.allowedOrigins("*").allowedMethods("*").allowedHeaders("*");
			}
		};
	}


}
