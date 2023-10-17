package kr.or.semo.page.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.or.semo.group.model.vo.Group;
import kr.or.semo.page.model.service.PageService;

@RestController
@RequestMapping(value="/page")
public class PageController {
	@Autowired
	private PageService pageService;
	
	@GetMapping(value="/list/{reqPage}/{categoryLocal}/{categoryValue}")
	public Map list(@PathVariable int reqPage, @PathVariable String categoryLocal, @PathVariable String categoryValue) {
		System.out.println("reqPage는 "+reqPage);
		System.out.println("categoryLocal은 "+categoryLocal);
		System.out.println("categoryValue는 "+categoryValue);
		//System.out.println("groupNo는 "+groupNo);
		Map map = pageService.pageList(reqPage,categoryLocal,categoryValue);
		//System.out.println("map은 "+map);
		return map;
	}
	/*
	@PostMapping(value="/search")
	public List search(@RequestBody Group g) {
		//return pageService.search(searchContent);
		System.out.println("searchContent는 "+g.getGroupName());
		List list = pageService.search(g.getGroupName());
		System.out.println("list는 "+list);
		//return pageService.search(g.getGroupName());
		return list;
	}
	*/
	
	@GetMapping(value="/searchSocialing/{searchKeyword}/{reqPage}")
	public Map searchSocialing(@PathVariable String searchKeyword, @PathVariable int reqPage) {
		System.out.println("searchKeyword는 "+searchKeyword);
		System.out.println("reqPage는 "+reqPage);
		Map map = pageService.searchSocialing(searchKeyword,reqPage);
		return map;
	}
	
	@GetMapping(value="/searchFeed/{searchKeyword}/{reqPage}")
	public Map searchFeed(@PathVariable String searchKeyword, @PathVariable int reqPage) {
		System.out.println("searchKeyword는 "+searchKeyword);
		System.out.println("reqPage는 "+reqPage);
		Map map = pageService.searchFeed(searchKeyword,reqPage);
		return map;
	}
}
