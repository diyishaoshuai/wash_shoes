package com.diyishaoshuai.entity;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import javax.xml.crypto.Data;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class CustomDateTimeSerializer extends JsonSerializer<Data> {

    @Override
    public void serialize(Data value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        sdf.setTimeZone(TimeZone.getTimeZone("Asia/shanghai"));
        gen.writeString(sdf.format(value));
    }
}
