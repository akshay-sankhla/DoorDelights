package com.stackroute.favoriteservice.config;

import com.stackroute.favoriteservice.filter.JwtFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.GenericFilterBean;

@Configuration
public class FilterConfig {
    public static final String FAVOURITES_PATH = "/api/fav/*";

    @Bean
    public FilterRegistrationBean<GenericFilterBean> jwtFilter() {
        FilterRegistrationBean<GenericFilterBean> filterRegistrationBean = new FilterRegistrationBean<>();
        filterRegistrationBean.setFilter(new JwtFilter());
        filterRegistrationBean.addUrlPatterns(FAVOURITES_PATH);
        return filterRegistrationBean;
    }
}
