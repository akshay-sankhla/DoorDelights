package com.stackroute.searchservice.controller;

import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/api/search")
public class SearchController {

@GetMapping("/city/{id}")
public ResponseEntity<?> searchTrack(@PathVariable Integer id){
		RestTemplate rt=new RestTemplate();
		String url="https://developers.zomato.com/api/v2.1/search?entity_id="+id+"&entity_type=city";
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.set("user-key", "5ffb698e3d9a8ea8d51fb8847c216058");
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<>(headers);
		return rt.exchange(url, HttpMethod.GET, entity, Object.class);
}

@GetMapping("/{id}/{searchText}")
public ResponseEntity<?> searchTrack(@PathVariable Integer id, @PathVariable String searchText){
		RestTemplate rt=new RestTemplate();
		String url="https://developers.zomato.com/api/v2.1/search?entity_id="+id+"&entity_type=city&q="+searchText;
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		headers.set("user-key", "5ffb698e3d9a8ea8d51fb8847c216058");
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<String> entity = new HttpEntity<>(headers);
		return rt.exchange(url, HttpMethod.GET, entity, Object.class);
}

}
