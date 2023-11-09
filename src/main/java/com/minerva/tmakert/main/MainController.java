package com.minerva.tmakert.main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/")
    public String mainView(){
        return "main";
    }
    
    @RequestMapping("/login")
    public String loginView(){
        return "login";
    }

    @RequestMapping("/qr")
    public String qrView(){
        return "qr";
    }

    @RequestMapping("/payment")
    public String paymentView(){
        return "payment";
    }
}
